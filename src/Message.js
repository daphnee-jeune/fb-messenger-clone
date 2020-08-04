import React, { forwardRef } from "react"
import "./Message.css"

import { Card, CardContent, Typography } from "@material-ui/core"

const Message = forwardRef(({ userName, data }, ref) => {
    const isUser = userName === data.userName

    return (
            <div ref={ref} className={`message ${isUser && "message__user"}`}>
                <Card>
                    <CardContent className={isUser ? "message__userCard" : "message__guestCard"}>
                        <Typography 
                            color="white"
                            variant="h5"
                            component="h2"
                        >
                            {!isUser && `${data.userName || "Unknown user"}: `} {data.message}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
    )
})

export default Message
