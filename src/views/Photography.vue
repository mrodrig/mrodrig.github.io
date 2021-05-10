<template>
    <div id="photography">
        <h2>Background</h2>
        <p>
            I became interested in photography several years ago after seeing the big cameras and lenses at my sister's softball tournaments.
            My parents ended up purchasing me my first DSLR camera - a Canon EOS Digital Rebel XTi with an 18-55mm and 75-300mm lens.
            I took well over 20,000 photos with that camera and it went practically everywhere.
        </p>
        <p>
            After purchasing my Nissan 370z, I wanted to get better quality photos of it than I could take with just my cell phone.
            Upon researching the cameras on the market, I decided on a Canon EOS Rebel T5i with an 18-55mm lens.
            I later purchased a 50mm macro lens to use with it as well.
            Again, I took over 20,000 photos with it. Many of those photos were taken at various car shows and  cruise nights that I
            participated in.
        </p>
        <p>
            In search of better quality and more fine-grained control, I recently purchased my first full-frame DSLR camera -
            a Canon EOS 6D Mark II with the 24-105mm f/4L II lens and Canon battery grip.
            In the first year of ownership, I have already taken several thousand photos with it and look forward to taking thousands more!
        </p>

        <h2>Recent Photos</h2>
        
        <p>
            See some recent photos I've taken here:
            <a href="https://hotrodzphotography.github.io/#/albums">Hot Rodz Photography Albums</a>
        </p>
    </div>
</template>

<script>

export default {
    name: 'photography',
};
</script>

<style lang="less">
    #photography {
        margin: 0 2em;

        .user {
            text-align: center;
            padding-top: 1.3em;
            padding-bottom: .3em;
            transition: 0.3s ease;

            * {
                vertical-align: middle;
            }

            .user-info {
                display: inline-block;
                padding-right: .5em;
                font-size: 1.3em;

                .name {
                    color: @darkgray;
                }

                .username {
                    a {
                        color: @darkgray;
                        transition: 0.3s;
                        text-decoration: none;

                        &:hover {
                            color: @lightblue;
                        }
                    }
                }
            }

            .user-picture {
                img {
                    height: 5em;
                    border-radius: 2.5em;
                }
            }
        }

        #photos {
            * {
                vertical-align: top;
            }

            .photo {
                -webkit-box-flex: 0;
                -ms-flex: none;
                flex: none;
                width: 33.33333%;
                display: inline-block;

                .card {
                    margin: .5em;

                    .card-image {
                        border-top-left-radius: 1em;
                        border-top-right-radius: 1em;
                        overflow: hidden;

                        img {
                            width: 100%;
                        }
                    }

                    .card-metadata {
                        border: 1px @lightgray;
                        border-bottom-left-radius: 1em;
                        border-bottom-right-radius: 1em;
                        border-style: none solid solid solid;
                    }

                    .card-footer {
                        text-align: center;
                        padding-top: 1em;
                        padding-bottom: .7em;

                        .card-footer-item {
                            display: inline-block;
                            width: 33.33333%;

                            * {
                                vertical-align: middle;
                            }

                            .icon {
                                vertical-align: middle;
                                color: @darkgray;
                                padding-right: .5em;
                            }

                            .open-icon {
                                transition: .3s;
                                &:hover {
                                    color: @lightblue;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media @upToNarrowQuery {
        #photography {
            #photos {
                .photo {
                    width: 100%;
                }
            }
        }
    }

    @media @extraNarrowAndUpQuery {
        #photography {
            #photos {
                .photo {
                    width: 50%;
                }
            }
        }
    }

    @media @mediumAndUpQuery {
        #photography {
            #photos {
                .photo {
                    width: 33.3%;
                }
            }
        }
    }
</style>
