import React from 'react';

import { MultiChatSocket, useMultiChatLogic, MultiChatWindow } from 'react-chat-engine-advanced';

function ChatePage(props) {
    const chatProps = useMultiChatLogic('912fc595-2af8-4ee7-9dd1-1a486523db70',
        props.user.username, props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );
}

export default ChatePage
