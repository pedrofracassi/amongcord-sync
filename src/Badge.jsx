import styled from "styled-components";
import React from 'react'

const badges = {
    patron: {
        icon: 'patron.svg',
        background: '#141518'
    },
    developer: {
        icon: 'developer.svg',
        background: '#0000007F'
    },
    booster: {
        icon: 'booster.svg',
        background: '#36393F'
    },
    subscriber: {
        icon: 'subscriber.svg',
        background: '#000000'
    }
}

const Icon = styled.img`
    size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export default function Badge({ type }) {
    const Wrapper = styled.div`
        background-color: ${badges[type].background};
        position: absolute;
        margin-left: -6px;
        margin-top: -9px;
        width: 24px;
        height: 24px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
    `

    return <Wrapper>
        <Icon src={`badges/${badges[type].icon}`} alt={`${type} icon`}></Icon>
    </Wrapper>
}