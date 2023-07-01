import React, { useMemo } from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import type { WindowLocation } from '@reach/router'

import NormalizeStyle from '../styles/NormalizeStyle'
import GlobalStyle from '../styles/GlobalStyle'
import HighlightStyle from '../styles/HighlightStyle'

import 'prismjs/themes/prism-solarizedlight.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import { flexColumnCenter } from '../styles/mixinStyle'
import Seo from './SEO'
import Footer from './Footer'
import Bio from './Bio'
// import UserHeat from './UserHeat'
import useSpecificImages from '../hooks/useSpecificImages'
import useRootThumbnailPath from '../hooks/useRootThumbnailPath'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { DarkToggle } from './DarkToggle'
import HeaderAction from './HeaderAction'
import { NavigationBar } from './NavigationBar'

import 自画像 from '../images/自画像.png'

type Props = {
  location: WindowLocation
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ location, children }) => {
  const prefix: string = __PATH_PREFIX__ || ''
  const rootPath = `${prefix}/`
  const tagPath = `${prefix}/tags/`
  const categoryPath = `${prefix}/category/`

  const { isRoot, isTag } = useMemo(() => {
    const isRoot = location.pathname === rootPath
    const isTag = location.pathname.startsWith(tagPath)
    const isCategory = location.pathname.startsWith(categoryPath)
    return {
      isRoot,
      isTag,
      isCategory,
    }
  }, [location.pathname, rootPath, tagPath, categoryPath])

  const rootThumbnailPath = useRootThumbnailPath()

  const { headerImage } = useSpecificImages()
  const convertedHeaderImage = convertToBgImage(headerImage)

  const header = useMemo(() => {
    if (!convertedHeaderImage) {
      return null
    }

    if (isRoot) {
      return (
        <BackgroundImage Tag="div" css={styles.header_container} {...convertedHeaderImage} backgroundColor={`#8A5E5F`}>
          <DarkToggle />
          <Seo isRoot={true} thumbnailSrc={rootThumbnailPath} />
          <div className="h-20"></div>
          <img className="w-3/12" src={`${自画像 as string}`} alt="test" />
          <div className="text-7xl">Never Knows Best</div>
          <div css={styles.header_container__inner}>
            {/* <h1 css={styles.blog_title_area}> */}
            {/* <Link css={styles.blog_title} to={'/'}>
                Takumon Blog
              </Link> */}
            {/* </h1> */}
            <Bio />
          </div>
          <HeaderAction />
        </BackgroundImage>
      )
    }

    if (isTag) {
      return (
        <BackgroundImage Tag="div" css={styles.header_container} {...convertedHeaderImage} backgroundColor={`#8A5E5F`}>
          <DarkToggle />
          <Seo isRoot={true} thumbnailSrc={rootThumbnailPath} />
          <div css={styles.header_container__inner}>
            <h1 css={styles.blog_title_area}>
              <Link css={styles.blog_title} to={'/'}>
                Takumon Blog
              </Link>
            </h1>
            <Bio />
          </div>
          <HeaderAction />
        </BackgroundImage>
      )
    }

    return ''
  }, [isRoot, isTag, rootThumbnailPath, convertedHeaderImage])

  return (
    <div css={styles.root_container}>
      <NormalizeStyle />
      <GlobalStyle />
      <HighlightStyle />
      {/* <UserHeat /> */}
      <NavigationBar />
      {header}
      {children}
      <Footer isRoot={isRoot} />
    </div>
  )
}

export default Layout

const styles = {
  root_container: css`
    width: 100%;
    margin: 0;
    background-color: var(--bgLight);
    transition: background-color 400ms var(--transitionMode);
  `,

  header_container: css`
    ${flexColumnCenter}
    background-size: cover;
    margin: 0;
    min-height: 65vh;
    position: relative;
    &:after,
    &:before {
      filter: var(--bannerBGFilter);
      transition: filter 200ms var(--transitionMode) !important;
    }

    & * {
      filter: none;
    }
    /* boi用 */
    & div {
      color: var(--bgLight);
    }

    @media screen and (max-width: 720px) {
      background-attachment: scroll;
    }
    @media screen and (max-width: 600px) {
      min-height: 40vh;
    }
    @media screen and (max-width: 500px) {
      min-height: 30vh;
    }
  `,

  header_container__inner: css`
    z-index: 2;
  `,

  blog_title_area: css`
    font-size: 4em;
    margin-bottom: 0.5em;
    margin-top: 0;
    font-family: Montserrat;
    line-height: 1.5;
    @media screen and (max-width: 600px) {
      text-align: center;

      a {
        font-size: 36px;
      }
    }

    @media screen and (max-width: 500px) {
      text-align: center;

      a {
        font-size: 28px;
      }
    }
  `,

  blog_title: css`
    box-shadow: none;
    font-family: Montserrats, ans-serif;
    color: var(--textLight);
    :hover {
      box-shadow: none;
    }
  `,
}
