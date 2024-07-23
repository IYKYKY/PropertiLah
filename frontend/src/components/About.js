import React from 'react';
import './About.css';

function About() {

  const dataCurrentStyles = JSON.stringify({
    imageOverlayOpacity: 0.15,
    backgroundWidth: "background-width--full-bleed",
    sectionHeight: "section-height--small",
    horizontalAlignment: "horizontal-alignment--center",
    verticalAlignment: "vertical-alignment--middle",
    contentWidth: "content-width--wide",
    sectionTheme: "bright",
    sectionAnimation: "none",
    backgroundMode: "generative",
    generative: {
      type: "isometric",
      seed: 0,
      count: 0,
      size: 0,
      speed: 20,
      startColor: {
        type: "SITE_PALETTE_COLOR",
        sitePaletteColor: {
          id: "accent",
          alpha: 1.0
        }
      },
      endColor: {
        type: "SITE_PALETTE_COLOR",
        sitePaletteColor: {
          id: "darkAccent",
          alpha: 1.0
        }
      },
      invertColors: false,
      noiseIntensity: 0,
      noiseScale: 66,
      distortionScaleX: 0,
      distortionScaleY: 0,
      distortionSpeed: 0,
      distortionIntensity: 0,
      lightIntensity: 100,
      lightX: 100,
      bevelRotation: 0,
      bevelSize: 0,
      bevelStrength: 0,
      complexity: 0,
      cutoff: 0,
      isBevelEnabled: false,
      isBlurEnabled: false,
      scale: 0,
      speedMorph: 0,
      speedTravel: 0,
      steps: 0,
      travelDirection: 0,
      noiseBias: 0,
      animateNoise: false,
      distortionComplexity: 0,
      distortionDirection: 0,
      distortionMorphSpeed: 0,
      distortionSeed: 0,
      distortionSmoothness: 0,
      linearGradientStartColorDistance: 0,
      linearGradientEndColorDistance: 0,
      linearGradientAngle: 0,
      linearGradientAngleMotion: 0,
      linearGradientRepeat: 0,
      radialGradientRadius: 0,
      radialGradientPositionX: 0,
      radialGradientPositionY: 0,
      radialGradientFollowCursor: false,
      radialGradientFollowSpeed: 0,
      imageScale: 0,
      imageCount: 0,
      patternEnabled: false,
      patternSize: 0,
      patternOffsetX: 0,
      patternOffsetY: 0,
      patternSpaceX: 0,
      patternSpaceY: 0,
      waveEnabled: false,
      waveSpeed: 0,
      waveComplexity: 0,
      waveDepth: 0,
      waveShadowDepth: 0,
      boxSize: 1.0,
      scaleX: 100,
      scaleY: 100,
      scaleZ: 100,
      isMorphEnabled: false,
      lightY: 50,
      lightZ: 25,
      noiseRange: 100,
      positionFactor: 1,
      scaleFactor: 0,
      colorFactor: 1,
      sizeVariance: 0,
      wobble: 0,
      morph: 0,
      scrollMovement: 0,
      patternScaleX: 0,
      patternScaleY: 0,
      patternPowerX: 0,
      patternPowerY: 0,
      patternAmount: 0,
      surfaceHeight: 0,
      colorStop1: 0,
      colorStop2: 0,
      colorStop3: 0,
      colorStop4: 0,
      gradientDistortionX: 0,
      gradientDistortionY: 0,
      curveX: 0,
      curveY: 0,
      curveFunnel: 0,
      fogIntensity: 0,
      repeat: 0,
      rotation: 0,
      rotationSpeed: 0,
      blur: 0,
      complexityY: 0,
      complexityZ: 0,
      amplitudeY: 0,
      amplitudeZ: 0,
      offset: 0,
      lightAngle: 0,
      alpha: 0
    }
  });

  const dataCurrentContext = JSON.stringify({
    video: {
      playbackSpeed: 0.5,
      filter: 1,
      filterStrength: 0,
      zoom: 0,
      videoSourceProvider: "none"
    },
    backgroundImageId: null,
    backgroundMediaEffect: {
      type: "none"
    },
    divider: null,
    typeName: "page"
  });


  return (
    <section
      data-test="page-section"
      data-section-theme="bright"
      className="page-section layout-engine-section background-width--full-bleed section-height--small content-width--wide horizontal-alignment--center vertical-alignment--middle bright"
      data-section-id="607773128d3f9a35d9e697c1"
      data-controller="SectionWrapperController"
      data-current-styles={dataCurrentStyles}
      data-current-context={dataCurrentContext}
      data-animation="none"
      data-controllers-bound="SectionWrapperController"
      data-active="true"
    >
      <div className="section-border"></div>
      <div className="section-background">
        <div className="section-background-content" data-controller="BackgroundIsometric" data-controllers-bound="BackgroundIsometric">
          <div className="section-background-lines"></div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content">
          <div className="sqs-layout sqs-grid-12 columns-12" data-type="page-section" id="page-section-607773128d3f9a35d9e697c1">
            <div className="row sqs-row">
              <div className="col sqs-col-12 span-12">
                <div className="sqs-block html-block sqs-block-html" data-block-type="2" data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}' id="block-0a3be124d4fe8b5df270">
                  <div className="sqs-block-content">
                    <div className="sqs-html-content">
                      <h1 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>What is PropertiLah?</h1>
                      <p style={{ textAlign: 'center', whiteSpace: 'pre-wrap', fontSize: '1.25rem' }}>
                        Designed to simplify home-buying process, PropertiLah! wants to make selling property easier for you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

