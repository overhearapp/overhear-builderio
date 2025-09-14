import React from 'react'
import styles from './MyComponent.module.css'
import RawImg from './RawImg'

export default function MyComponent(): JSX.Element {
  return (
    <div className={styles.rootWrapper}>
      <div className={styles.hiddenDiv} aria-hidden>
        {/* intentionally hidden */}
      </div>

      <div>
        <div className={styles.flexRow}>
          <div className={styles.column}>
            <section tabIndex={-1} className={styles.sectionBase}>
              <div style={{
                height: '100%',
                left: '0px',
                mask: '0px 50% / 100% no-repeat',
                maskPosition: '0px 50%',
                maskRepeat: 'no-repeat',
                maskSize: '100%',
                overflowX: 'hidden',
                overflowY: 'hidden',
                position: 'absolute',
                top: '0px',
                width: '100%',
              }}>
                <div style={{ height: '100%', position: 'absolute', top: '0px', width: '100%' }} />
                <div style={{ height: '100%' }} />
              </div>

              <div style={{ pointerEvents: 'none', position: 'relative', width: '100%' }}>
                <div style={{ display: 'grid', gridTemplate: '1fr / 100%', gridTemplateRows: '1fr', pointerEvents: 'none', width: '100%' }}>
                  <div className={styles.imageWrapper}>
                    <a
                      target="_self"
                      href="https://www.theoverhear.app/about"
                      className={styles.linkReset}
                      rel="noreferrer"
                    >
                      <RawImg
                        fetchPriority="high"
                        alt="low res overhear icon.png"
                        width={375}
                        height={363}
                        image="https://static.wixstatic.com/media/948c86_0292b7e48fc24fe89f9bba9ecdd6eb60~mv2.png/v1/fill/w_750,h_726,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/low%20res%20overhear%20icon.png"
                        style={{
                          aspectRatio: 'auto 375 / 363',
                          borderColor: 'rgb(0, 0, 238)',
                          color: 'rgb(0, 0, 238)',
                          cursor: 'pointer',
                          height: '100%',
                          mask: '0px 50% / 100% 100% no-repeat',
                          maskPosition: '0px 50%',
                          maskRepeat: 'no-repeat',
                          maskSize: '100% 100%',
                          objectFit: 'cover',
                          outlineColor: 'rgb(0, 0, 238)',
                          overflowClipMargin: 'content-box',
                          overflowX: 'hidden',
                          overflowY: 'hidden',
                          textDecorationColor: 'rgb(0, 0, 238)',
                          width: '100%',
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>

            </section>
          </div>

          <div className={`${styles.column} ${styles.columnRight}`}>
            <div style={{ fontWeight: 400, minHeight: '992px' }}>
              <div style={{ fontWeight: 400 }}>
                <div data-builder-model="page" style={{ fontWeight: 400 }}>
                  <div style={{ fontWeight: 400 }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <section tabIndex={-1} className={styles.sectionBase}>
        <div style={{
          height: '100%',
          left: '0px',
          mask: '0px 50% / 100% no-repeat',
          maskPosition: '0px 50%',
          maskRepeat: 'no-repeat',
          maskSize: '100%',
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: '0px',
          width: '100%',
        }}>
          <div style={{ height: '100%', position: 'absolute', top: '0px', width: '100%' }} />
          <div style={{ height: '100%' }} />
        </div>

        <div style={{ pointerEvents: 'none', position: 'relative', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplate: '1fr / 100%', gridTemplateRows: '1fr', pointerEvents: 'none', width: '100%' }}>
            <div className={styles.imageWrapper}>
              <a
                target="_self"
                href="https://www.theoverhear.app/about"
                className={styles.linkReset}
                rel="noreferrer"
              >
                <RawImg
                  fetchPriority="high"
                  alt="low res overhear icon.png"
                  width={375}
                  height={363}
                  image="https://static.wixstatic.com/media/948c86_0292b7e48fc24fe89f9bba9ecdd6eb60~mv2.png/v1/fill/w_750,h_726,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/low%20res%20overhear%20icon.png"
                  style={{
                    aspectRatio: 'auto 375 / 363',
                    borderColor: 'rgb(0, 0, 238)',
                    color: 'rgb(0, 0, 238)',
                    cursor: 'pointer',
                    height: '100%',
                    mask: '0px 50% / 100% 100% no-repeat',
                    maskPosition: '0px 50%',
                    maskRepeat: 'no-repeat',
                    maskSize: '100% 100%',
                    objectFit: 'cover',
                    outlineColor: 'rgb(0, 0, 238)',
                    overflowClipMargin: 'content-box',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    textDecorationColor: 'rgb(0, 0, 238)',
                    width: '100%',
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
