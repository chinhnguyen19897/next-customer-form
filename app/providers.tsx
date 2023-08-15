'use client'

import {CacheProvider} from '@chakra-ui/next-js'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import React from "react";
import {Nunito} from 'next/font/google';

const nunito = Nunito({subsets: ['latin'], weight: ['300', '500'], style: 'normal'});


const theme = extendTheme({
    fonts: {
        heading: 'var(--font-nunito)',
        body: `var(--font-nunito)`
    }
})


export function Providers({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <style jsx global>
                {
                    `
                      :root {
                        --font-nunito: ${nunito.style.fontFamily}
                      }
                    `
                }
            </style>
            <CacheProvider>
                <ChakraProvider theme={theme}>
                    {children}
                </ChakraProvider>
            </CacheProvider>
        </>
    )
}