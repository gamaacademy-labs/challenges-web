import React from 'react';
import Image from 'next/image';

import { Box, Button, MaterialIcon, Tooltip, Typography } from '@gama-academy/smash-web';
import * as Styles from './description-tab.styles'
import { useDimensions } from '../../../../hooks/layout/use-dimensions.hook';
import { MOBILE_BREAKPOINT } from '../../../../utils/responsive';
import { BsFillBarChartFill } from 'react-icons/bs';

const DescriptionTab = () => {

    const { width } = useDimensions()

    function renderDescriptionsTags() {
        return (
            <Box
                dir="row" 
                justifyContent="space-between" 
                pt="3" 
                pb="3"
                borderColor="grey.2"
                borderWidth={1}
                borderStyle="solid"
                borderX="0"
            >
                <Box dir="row" flexWrap="wrap">
                    <Box dir="row" alignItems="center" mr="4">
                        <MaterialIcon name="emoji_events" mr="1" color="brand.secondary"/>
                        <Box>
                            <Typography fontSize="1" fontWeight="bold">Pontuação</Typography>
                            <Typography fontSize="1">150 pontos</Typography>
                        </Box>
                    </Box>
                    <Box dir="row" alignItems="center" mr="3">
                        <Tooltip
                            alignment="start"
                            message="Nível de dificuldade do desafio."
                        >
                            <Box dir="row" alignItems="center" mr="3">
                                <Box mr="2">
                                    <BsFillBarChartFill color='secondary-4' />
                                </Box>
                                <Box>
                                    <Typography fontSize="1" fontWeight="bold">Nível</Typography>
                                    <Typography fontSize="1">Médio</Typography>
                                </Box>
                            </Box>
                        </Tooltip>
                    </Box>
                    {
                        width > MOBILE_BREAKPOINT && (
                            <Box alignItems="center" justifyContent="center">
                                <Tooltip
                                    alignment="start"
                                    message={<Typography color="greyDark.7" fontSize="2" fontWeight="medium">Avaliação média.</Typography>}
                                    position="top"
                                >
                                    <Box dir="row" alignItems="center">
                                        <MaterialIcon name="star" size={24} color="yellow.4"/>
                                        <MaterialIcon name="star" size={24} color="yellow.4"/>
                                        <MaterialIcon name="star" size={24} color="yellow.4"/>
                                        <MaterialIcon name="star_half" size={24} color="yellow.4"/>
                                        <MaterialIcon name="star_outline" size={24} color="yellow.4"/>
                                        <Typography ml="1">(461)</Typography>
                                    </Box>
                                </Tooltip>
                            </Box>
                        )
                    }
                </Box>
                {
                    width > MOBILE_BREAKPOINT && (
                        <Box dir="row">
                            <Button
                                onClick={() => {}}
                                variant="ghost"
                                color="secondary.4"
                                disableHoverEffect
                            >
                                <MaterialIcon mr="1" name="share" color="secondary.4"/>
                                <Typography decoration='underline'>Compartilhar</Typography>
                            </Button>
                        </Box>
                    )
                }
            </Box>
        )
    }

    return (
        <Box px="2" width="100%">
            {
                width > MOBILE_BREAKPOINT && (
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
                )
            }
            {
                width <= MOBILE_BREAKPOINT && renderDescriptionsTags()
            }
            <Typography type="description" mt="2">
                Neste exercício construiremos um clone perfeito da interface do AirBnb. escrever algo para o seu público, como utilizar tudo isso em e-mails, formulários, notificações e outros gatilhos.
            </Typography>
            <Box
                dir="row"
                mt="4"
                pb="3"
                alignItems="center"
            >
                <Styles.Tags>SEO</Styles.Tags>
                <Styles.Tags>UI</Styles.Tags>
                <Styles.Tags>UX</Styles.Tags>
            </Box>
            {
                width > MOBILE_BREAKPOINT && renderDescriptionsTags()
            }
            { width <= MOBILE_BREAKPOINT && (
                <Box dir="row">
                    <Button
                        onClick={() => {}}
                        variant="ghost"
                        color="secondary.4"
                        disableHoverEffect
                    >
                        <MaterialIcon mr="1" name="push_pin" color="secondary.4"/>
                        <Typography decoration='underline'>Salvar</Typography>
                    </Button>
                    <Button
                        onClick={() => {}}
                        variant="ghost"
                        color="secondary.4"
                        disableHoverEffect
                    >
                        <MaterialIcon mr="1" name="share" color="secondary.4"/>
                        <Typography decoration='underline'>Compartilhar</Typography>
                    </Button>
                </Box>
            )}
        </Box>
    )
}

export default DescriptionTab;