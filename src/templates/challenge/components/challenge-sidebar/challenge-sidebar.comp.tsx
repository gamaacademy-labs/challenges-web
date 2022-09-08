import React from 'react';
import Image from 'next/image';

import { Box, Button, Card, MaterialIcon, Tabs, Tooltip, Typography } from '@gama-academy/smash-web';

import { useDimensions } from '../../../../hooks/layout/use-dimensions.hook';
import { MOBILE_BREAKPOINT } from '../../../../utils/responsive';

import { RankingList } from '../ranking-list/ranking-list.comp';
import * as Styles from './challenge-sidebar.styles'
import { ChallengeSidebarProps } from './challenge-sidebar.types';
import { ChallengeTabs } from '../../challenge.types';

const ChallengeSidebar = (props: ChallengeSidebarProps) => {

    const { width } = useDimensions()

    const rankingMock = [
        {
            name: "Morpheus",
            value: 100
        },
        {
            name: "Lauras",
            value: 10
        }
    ]

    const tabs = [
        {
            id: "description",
            title: "Descricão"
        },
        {
            id: "deliverables",
            title: "Entregáveis"
        },
        {
            id: "ranking",
            title: "Ranking"
        },
    ]

    function renderTabItem(title: string, active: boolean) {
        return (
            <Styles.TabItemContainer active={active} px="4" py="1">
                <Typography fontSize="2" color={active ? "white" : "greyDark.7"}>{title}</Typography>
            </Styles.TabItemContainer>
        )
    }

    return (
        <Box width={width > MOBILE_BREAKPOINT ? 300 : "100%"} margin="2" padding="2">
            <Box
                borderColor="primary.3"
                borderStyle="solid"
                borderWidth={8}
                mb="4"
                borderRadius={8}
            >
                <Image src="/img/image.png" width={300} alt="Logo" height={200} />
            </Box>
            {
                width <= MOBILE_BREAKPOINT && (
                    <Box alignItems="flex-start">
                    <Box dir="row">
                        <Box
                            width="24px"
                            height="24px"
                            borderRadius="4"
                            justifyContent="center"
                            alignItems="center"
                            backgroundColor="brand.primary"
                        >
                            <Image src="/img/hipsterIcon.png" width="16" height="5" />
                        </Box>
                        <Typography ml="2" type="title">Quem tem dados é rei!</Typography>
                    </Box>
                    <Tooltip
                        alignment="start"
                        message={<Typography color="greyDark.7" fontSize="2" fontWeight="medium">Avaliação média.</Typography>}
                        position="top"
                    >
                        <Box dir="row" alignItems="center" mt="2">
                            <MaterialIcon name="star" size={24} color="yellow.4"/>
                            <MaterialIcon name="star" size={24} color="yellow.4"/>
                            <MaterialIcon name="star" size={24} color="yellow.4"/>
                            <MaterialIcon name="star_half" size={24} color="yellow.4"/>
                            <MaterialIcon name="star_outline" size={24} color="yellow.4"/>
                            <Typography ml="1">(461)</Typography>
                        </Box>
                    </Tooltip>
                    <Box mt="3">
                        <Tabs default={tabs[0].id}>
                            <Box>
                                <Card
                                    shadowBehavior='never'
                                    borderRadius="4"
                                    padding="none"
                                    py="1"
                                    px="1"
                                >
                                    <Tabs.Bar
                                        thickness={0}
                                        color="secondary.4"
                                    >
                                        {
                                            tabs.map((tab, index) => (
                                                <Tabs.Item
                                                    onClick={() => props.onChange(tab.id as ChallengeTabs)}
                                                    key={tab.id + index}
                                                    id={tab.id}
                                                    content={<></>}
                                                    renderTab={({ active }) => renderTabItem(tab.title, !!active)}
                                                />
                                            ))
                                        }
                                    </Tabs.Bar>
                                </Card>
                            </Box>
                        </Tabs>
                    </Box>
                    </Box>
                )
            }
            {
                width > MOBILE_BREAKPOINT && (
                    <RankingList
                        data={rankingMock}
                    />
                )
            }
        </Box>
    )
}

export default ChallengeSidebar;