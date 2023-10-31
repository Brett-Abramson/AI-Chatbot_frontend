import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

const extractCodeFromString = (message: string) => {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
};

const isCodeBlock = (str: string) => {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("/")
  ) {
    return true;
  }
};

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "ai_assistant";
}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();
  return role === "ai_assistant" ? (
    <Box
      sx={{
        display: "flex",
        p: 2,
        bgcolor: "#004d5612",
        gap: 2,
        borderRadius: 2,
        my: 1,
      }}
    >
      <Avatar sx={{ ml: "0" }}>
        <img src="openai.png" alt="openai" width={"30px"} />
      </Avatar>
      <Box>
        {!messageBlocks && <Typography fontSize={"20px"}>{content}</Typography>}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block) =>
            isCodeBlock(block) ? (
              // // grab the first word of the code block and put it in the language
              <SyntaxHighlighter style={coldarkCold} language="javascript">
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography fontSize={"20px"}>{content}</Typography>
            )
          )}
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        p: 2,
        bgcolor: "#004d56",
        gap: 2,
        mr: 2,
        borderRadius: 2,
      }}
    >
      <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
        {auth?.user?.name[0]}
        {auth?.user?.name.split(" ")[1][0]}
      </Avatar>
      <Box>
        <Box>
          {!messageBlocks && (
            <Typography fontSize={"20px"}>{content}</Typography>
          )}
          {messageBlocks &&
            messageBlocks.length &&
            messageBlocks.map((block) =>
              isCodeBlock(block) ? (
                // // grab the first word of the code block and put it in the language
                <SyntaxHighlighter style={coldarkCold} language="javascript">
                  {block}
                </SyntaxHighlighter>
              ) : (
                <Typography fontSize={"20px"}>{content}</Typography>
              )
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatItem;
