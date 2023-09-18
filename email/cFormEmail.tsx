import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';
import {Tailwind} from '@react-email/tailwind';

interface cFormEmailProps{
    message: string,
    email: string
}

export default function cFormEmail({message,email} : cFormEmailProps) {
  return (
    <Html>
        <Head>
            <Preview>New message from portfolio.</Preview>
            <Tailwind>
                <Body className = "bg-slate-100">
                    <Container className = "flex flex-col gap-4 justify-start items-start">
                        <Heading>{`New message from ${email}`}</Heading>
                        <Text className = "whitespace-pre-line">{message}</Text>
                    </Container>
                </Body>
            </Tailwind>
        </Head>
    </Html>
  )
}
