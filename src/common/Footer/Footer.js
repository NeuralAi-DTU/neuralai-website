import React from 'react';
import { Container, Typography, Grid, Link } from '@material-ui/core';
import { motion } from 'framer-motion';
import './footerResponsive.css';
import { StylesProvider } from '@material-ui/styles';

const introVariants = {
    initial: {
        y: '2vw',
        opacity: 0
    },
    inView: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.7
        }
    }
}

const Footer = () => {
    const links = [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Community',
            href: '/community'
        },
        {
            text: 'Team',
            href: '/team'
        }
    ];
    const social = [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/neuralaidtu/?hl=en'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.instagram.com/neuralaidtu/?hl=en'
        },
        {
            text: 'Facebook',
            href: 'https://www.instagram.com/neuralaidtu/?hl=en'
        },
        {
            text: 'Twitter',
            href: 'https://www.instagram.com/neuralaidtu/?hl=en'
        }
    ];

    return (
        <motion.div
            variants={introVariants}
            initial='initial'
            whileInView='inView'
        >
            <StylesProvider injectFirst>
            <Container style={{ background: '#000000', paddingBottom: '1rem', width: '100%' }}>
                <hr />
                <Grid container style={{ marginTop: '2.2rem' }}>
                    {/* NeuralAI Intro */}
                    <Grid item sm={12} md={8} spacing={10} className='containers' gutterBottom>
                        <Typography
                            variant='caption'
                            color='primary'
                            className='introNeuralAI'
                        >
                            NeuralAI aims to bring the power of&#160;
                            <Typography
                                variant='caption'
                                color='textPrimary'
                                className='introNeuralAI'
                            >
                                Artificial Intelligence to DTU
                            </Typography>
                            &#160;by harnessing the true potential of its students.
                        </Typography>
                    </Grid>

                    {/* NeuralAI Links */}
                    <Grid item xs={12} sm={6} md={2} className='containers'>
                        {links.map((link) => {
                            return (
                                <Link href={link.href} style={{ textDecoration: 'none' }}>
                                    <Typography
                                        className='links'
                                        variant='body1'
                                        textAlign='center'
                                        gutterBottom
                                    >
                                        {link.text}
                                    </Typography>
                                </Link>
                            )
                        })}
                    </Grid>

                    {/* NeuralAI Social Media */}
                    <Grid item xs={12} sm={6} md={2} className='containers'>
                        {social.map((sm) => {
                            return (
                                <Link href={sm.href} style={{ textDecoration: 'none' }}>
                                    <Typography
                                        className='links'
                                        variant='body1'
                                        textAlign='center'
                                        gutterBottom
                                    >
                                        {sm.text}
                                    </Typography>
                                </Link>
                            )
                        })}
                    </Grid>

                    {/* NeuralAI Logo */}
                    <Grid item sm={6} style={{textAlign: 'center'}} className='containerLogo'>
                        <img className='logo' alt='NeuralAI-logo' src={require('../../img/logoFooter.png')} />
                    </Grid>

                    {/* NeuralAI Email & Rights */}
                    <Grid item sm={6} spacing={10} style={{textAlign:'right'}} className='containers'>
                        <br/>
                        <br/>
                        <Link href='mailto:neural.ai.dtu@gmail.com' style={{ textDecoration: 'none' }}>
                            <Typography
                                variant='body1'
                                color='secondary'
                                className='mail'
                            >
                                neural.ai.dtu@gmail.com
                            </Typography>
                        </Link>
                        <Typography
                            variant='body1'
                            color='primary'
                            className='mail'
                        >
                            &copy; 2022 NeuralAI DTU. All Rights Reserved
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            </StylesProvider>
        </motion.div>
    )
}

export default Footer;