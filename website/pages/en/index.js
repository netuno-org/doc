/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const translate = require('../../server/translate.js').translate;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="container-fluid">
          <div className="row">
              {props.children}
          </div>
      </div>
    );

    const CategoryContainer = props => (
        <div id={props.id} className="col-md-4 category">
            <div className="content">
                <h2>
                    {props.title}
                </h2>
                <hr/>
                <p className="sm-description">
                    {props.smDescription}
                </p>
                <p className="bg-description">
                    {props.bgDescription}
                </p>
                <div className="pluginWrapper buttonWrapper">

                    <a className="button" href={props.href} target={props.target}>
                        {props.url}
                    </a>
                </div>
            </div>
            <div className="bg-image"/>
        </div>
    );

    return (
        <SplashContainer>
            <CategoryContainer
                id="a"
                title={[<translate>Get Started</translate>]}
                smDescription={[<translate>Learn how install the Netuno and first steps to start using.</translate>]}
                bgDescription={[<translate>Netuno is installed with one command line, supports Linux, MacOS X and Windows. It even runs over ARM.</translate>]}
                href={docUrl('installation')}
                url={[<translate>Get Started</translate>]}
            />
            <CategoryContainer
                id="c"
                title={[<translate>Academy</translate>]}
                smDescription={[<translate>Learn how to use Netuno.</translate>]}
                bgDescription={[<translate>Want to learn more about Netuno? Here you can deepen your knowledge about the platform.
                    Know how.</translate>]}
                href={docUrl('academy/introduction')}
                url={[<translate>Academy</translate>]}
            />
            <CategoryContainer
                id="b"
                title={[<translate>Library</translate>]}
                smDescription={[<translate>Explore the full potential of Netuno.</translate>]}
                bgDescription={[<translate>Discover all the ways to integrate Netuno with the technology you already have and how to do even more with Netuno.</translate>]}
                href={docUrl('library/introduction')}
                url={[<translate>Library</translate>]}
            />
        </SplashContainer>
    );
  }

    // const TestContainer = props => (
    //     <div className="homeContainer">
    //         <div className="homeSplashFade">
    //             <div className="wrapper homeWrapper">{props.children}</div>
    //         </div>
    //     </div>
    // );
    //
    // const Logo = props => (
    //     <div className="projectLogo">
    //         <img src={props.img_src} alt="Project Logo" />
    //     </div>
    // );
    //
    // const ProjectTitle = props => (
    //     <h2 className="projectTitle">
    //         {props.title}
    //         <small>{props.tagline}</small>
    //     </h2>
    // );
    //
    // const PromoSection = props => (
    //     <div className="section promoSection">
    //         <div className="promoRow">
    //             <div className="pluginRowBlock">{props.children}</div>
    //         </div>
    //     </div>
    // );
}
{/*<TestContainer>*/}
{/*  <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />*/}
{/*  <div className="inner">*/}
{/*    <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />*/}
{/*    <PromoSection>*/}
{/*        <Button href={docUrl('installation')}><translate>Download</translate></Button>*/}
{/*    </PromoSection>*/}
{/*  </div>*/}
{/*</TestContainer>*/}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = Index;
