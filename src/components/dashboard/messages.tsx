import React, { useEffect, useMemo, useState } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import { useAppSession } from "../auth/app-session";
import {
  DashboardChatBubble,
  DashboardChatTime,
  DashboardConversation,
  DashboardConversationActions,
  DashboardConversationBody,
  DashboardConversationHeader,
  DashboardGhostButton,
  DashboardMessageComposer,
  DashboardMessageInput,
  DashboardMessagesGrid,
  DashboardMessagesShell,
  DashboardMiniSearch,
  DashboardPageCopy,
  DashboardPageIntro,
  DashboardPageTitle,
  DashboardPrimaryButton,
  DashboardStatusDot,
  DashboardSurface,
  DashboardThreadAside,
  DashboardThreadBody,
  DashboardThreadCard,
  DashboardThreadList,
  DashboardThreadMeta,
  DashboardThreadName,
  DashboardUnread,
} from "../../style/dashboard/dashboardStyle";

const DashboardMessagesPage = () => {
  const {
    deleteConversation,
    markThreadRead,
    messageConversations,
    messageThreads,
    sendMessage,
  } = useAppSession();
  const [activeThreadId, setActiveThreadId] = useState(messageThreads[0]?.id ?? "");
  const [draftMessage, setDraftMessage] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const filteredThreads = useMemo(
    () =>
      messageThreads.filter((thread) =>
        [thread.name, thread.role]
          .join(" ")
          .toLowerCase()
          .includes(searchValue.trim().toLowerCase())
      ),
    [messageThreads, searchValue]
  );

  useEffect(() => {
    if (!filteredThreads.length) {
      setActiveThreadId("");
      return;
    }

    if (!filteredThreads.some((thread) => thread.id === activeThreadId)) {
      setActiveThreadId(filteredThreads[0].id);
    }
  }, [activeThreadId, filteredThreads]);

  useEffect(() => {
    if (activeThreadId) {
      markThreadRead(activeThreadId);
    }
  }, [activeThreadId, markThreadRead]);

  const activeThread =
    filteredThreads.find((thread) => thread.id === activeThreadId) ?? filteredThreads[0];
  const activeMessages = activeThread ? messageConversations[activeThread.id] ?? [] : [];

  return (
    <DashboardSurface>
      <DashboardPageIntro>
        <DashboardPageTitle>Messages</DashboardPageTitle>
        <DashboardPageCopy>Lorem ipsum dolor sit amet, consectetur.</DashboardPageCopy>
      </DashboardPageIntro>

      <DashboardMessagesGrid>
        <DashboardMessagesShell style={{ display: "grid", gap: "14px" }}>
          <DashboardMiniSearch>
            <SearchRoundedIcon fontSize="small" />
            <input
              placeholder="Search"
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </DashboardMiniSearch>

          <DashboardThreadList>
            {filteredThreads.map((thread) => (
              <DashboardThreadCard
                key={thread.id}
                $active={thread.id === activeThreadId}
                type="button"
                onClick={() => setActiveThreadId(thread.id)}
              >
                <DashboardThreadBody>
                  <DashboardThreadName>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      <DashboardStatusDot $active={thread.status === "active"} />
                      {thread.name}
                    </span>
                  </DashboardThreadName>
                  <DashboardThreadMeta>{thread.role}</DashboardThreadMeta>
                </DashboardThreadBody>

                <DashboardThreadAside>
                  <DashboardThreadMeta>{thread.lastSeen}</DashboardThreadMeta>
                  {thread.unreadCount ? <DashboardUnread>{thread.unreadCount}</DashboardUnread> : null}
                </DashboardThreadAside>
              </DashboardThreadCard>
            ))}
          </DashboardThreadList>

          {!filteredThreads.length ? (
            <DashboardPageCopy>No conversations match the current search.</DashboardPageCopy>
          ) : null}
        </DashboardMessagesShell>

        <DashboardMessagesShell>
          {activeThread ? (
            <DashboardConversation>
              <DashboardConversationHeader>
                <div>
                  <DashboardThreadName>{activeThread.name}</DashboardThreadName>
                  <DashboardThreadMeta>{activeThread.role}</DashboardThreadMeta>
                </div>

                <DashboardConversationActions>
                  <DashboardGhostButton type="button">
                    <DashboardStatusDot $active={activeThread.status === "active"} />
                    {activeThread.status === "active" ? "Active" : "Last seen"} - {activeThread.lastSeen}
                  </DashboardGhostButton>
                  <DashboardGhostButton
                    type="button"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Delete the conversation with ${activeThread.name}?`
                        )
                      ) {
                        deleteConversation(activeThread.id);
                      }
                    }}
                  >
                    <DeleteOutlineRoundedIcon fontSize="small" />
                    Delete Conversation
                  </DashboardGhostButton>
                </DashboardConversationActions>
              </DashboardConversationHeader>

              <DashboardConversationBody>
                {activeMessages.map((message) => (
                  <DashboardChatBubble key={message.id} $author={message.author}>
                    <div>{message.body}</div>
                    <DashboardChatTime>{message.time}</DashboardChatTime>
                  </DashboardChatBubble>
                ))}
              </DashboardConversationBody>

              <DashboardMessageComposer
                onSubmit={(event) => {
                  event.preventDefault();

                  if (!activeThread || !draftMessage.trim()) {
                    return;
                  }

                  sendMessage(activeThread.id, draftMessage);
                  setDraftMessage("");
                }}
              >
                <DashboardMessageInput
                  placeholder="Type a message"
                  value={draftMessage}
                  onChange={(event) => setDraftMessage(event.target.value)}
                />
                <DashboardPrimaryButton type="submit">
                  <SendRoundedIcon fontSize="small" />
                  Send Message
                </DashboardPrimaryButton>
              </DashboardMessageComposer>
            </DashboardConversation>
          ) : (
            <DashboardPageCopy>Select a conversation to start messaging.</DashboardPageCopy>
          )}
        </DashboardMessagesShell>
      </DashboardMessagesGrid>
    </DashboardSurface>
  );
};

export default DashboardMessagesPage;
