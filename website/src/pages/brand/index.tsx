import React from "react"
import styles from "./brand.module.css"

function copyText(txt) {
  navigator.clipboard.writeText(txt);
}

export default () => (
  <div className={styles.main}>
    <div className={styles.topNav}>
      <div className={styles.topNavContainer}>
        <div className={styles.navLogo}>
          <img src={require("!file-loader!./logo.svg").default} />
        </div>
        <div className={styles.navButtons}>
          <a href="#thename" className={styles.navButton}>The name</a>
          <a href="#logo" className={styles.navButton}>Logo</a>
          <a href="#color" className={styles.navButton}>Color</a>
          <a href="#typography" className={styles.navButton}>Typography</a>
          <a href="#toneofvoice" className={styles.navButton}>Tone of Voice</a>
          <a href="#downloads" className={styles.navButton}>Downloads</a>
          <a href="#ourstory" className={styles.navButton}>Our story</a>
        </div>
        <div className={styles.navRight}>
          <span className={styles.navText}>Brand Guidelines</span>
        </div>
      </div>
    </div>

    <section className={`${styles.sectionGreen}`} id="home">
      <div className={styles.multiColumn}>
        <h1>Welcome to WG2's brand guidelines</h1>
        <p>
          Welcome to our brand guidelines website! Our guidelines provide a comprehensive resource for our brand identity, including our logo, color palette, typography, and messaging. By adhering to these guidelines, we ensure a consistent representation of our values, mission, and vision across all touchpoints.
          <strong> Thank you for your support!</strong>
        </p>
      </div>
    </section>

    <section className={`${styles.sectionWhite}`} id="thename">
      <h1>
        The name
      </h1>
      <div className={styles.multiColumn}>
        <p>
          We are building "<strong>WG2</strong>" as our brand name. The general rule is that we use WG2 everywhere, in any communication both externally and internally. It should always be spelled with upper-case letters.
        </p>
        <p>
          The full name "Working Group Two" should be used when required for legal documents and contracts. It can also be used in company backgrounders, "about us" sections, and boilerplates - in order to explain the heritage of our name.
        </p>
      </div>
    </section>

    <section className={`${styles.sectionBlue}`} id="logo">
      <h1>
        Logo
      </h1>
      <div className={styles.multiColumn}>
        <p>
          We constructed our log on three simple elements - a <strong>circle</strong>, a <strong>triangle</strong>, and a <strong>square</strong>.
        </p>
        <p></p>
      </div>

      <div className={styles.py_3}>
        <img src={require("!file-loader!./logo-breakdown-wireframe.png").default} />
      </div>

      <div className={styles.multiColumn}>
        <div>
          <p>The safe space around the logo is defined by the square element in the symbol.</p>
          <p>Where it makes sense, feel free to use the the symbol on it's own.</p>
        </div>
        <div>
          <p>Please be kind to our logo and <strong>don't</strong>:</p>
          <ul>
            <li>Bend or twist</li>
            <li>Distort or stretch</li>
            <li>Rotate or tilt</li>
            <li>Apply silly effects</li>
          </ul>
        </div>
      </div>

      <div className={styles.py_3}>
        <img src={require("!file-loader!./logo-breakdown-spacing.png").default} />
      </div>

      <div className={styles.multiColumn}>
        <p>
          You can use our log with almost any combination of our color palette, but <strong>black</strong> and <strong>white</strong> is the simplest way to use it.
        </p>
        <p></p>
      </div>

      <div className={`${styles.multiColumn} ${styles.noGap} ${styles.pt_3}`}>
        <div>
          <img src={require("!file-loader!./logo-black.jpg").default} />
        </div>
        <div>
          <img src={require("!file-loader!./logo-white.jpg").default} />
        </div>
      </div>

      <div>
        <div className={`${styles.multiColumn} ${styles.noGap} ${styles.pt_4}`}>
          <div>
            <img src={require("!file-loader!./wg2-green-blue.png").default} />
          </div>
          <div>
            <img src={require("!file-loader!./wg2-blue-green.png").default} />
          </div>
        </div>

        <div className={`${styles.multiColumn} ${styles.noGap}`}>
          <div>
            <img src={require("!file-loader!./wg2-blue-purple.png").default} />
          </div>
          <div>
            <img src={require("!file-loader!./wg2-purple-green.png").default} />
          </div>
        </div>

        <div className={`${styles.multiColumn} ${styles.noGap}`}>
          <div>
            <img src={require("!file-loader!./wg2-darkpurple-purple.png").default} />
          </div>
          <div>
            <img src={require("!file-loader!./wg2-purple-darkpurple.png").default} />
          </div>
        </div>
      </div>

    </section>

    <section className={`${styles.sectionWhite}`} id="color">
      <h1>
        Color
      </h1>
    </section>

    <section className={`${styles.sectionGreen} ${styles.gap40}`}>
      <h1 className={styles.fw_300}>
        Aurora Green
      </h1>

      <p>
        <strong>Pantone 2412</strong><br />
        <strong>CMYK 56 0 56 0</strong><br />
        <strong>HEX #6ADC99</strong>
      </p>
      
      <div className={styles.paragraphColumn}>
        <div>
          <p>Aurora Green is a stunning shade that evokes the natural beauty of the Northern Lights. This cool green hue has a subtle blue undertone, which gives it a calming and serene quality. Like the Aurora Borealis, Aurora Green is a color that can be both bold and peaceful.</p>
          <p className={styles.pt_3}>Click on the buttons below to copy the color as well as the shades of it.</p>
        </div>
      </div>

      <button onClick={() => copyText('#6adc99')} style={{backgroundColor: 'rgba(0, 33, 153, 0.08)'}}>
        Aurora Green
      </button>

      <div className={styles.colorButtons}>
        <button onClick={() => copyText('#8ee4b1')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.24)'}}>
          Lighten 1
        </button>
        <button onClick={() => copyText('#a6eac2')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
          Lighten 2
        </button>
        <button onClick={() => copyText('#bdf0d2')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.56)'}}>
          Lighten 3
        </button>
        <button onClick={() => copyText('#d5f5e2')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.72)'}}>
          Lighten 4
        </button>
        <button onClick={() => copyText('#f9fefb')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.96)'}}>
          Lighten 5
        </button>
        <button onClick={() => copyText('#51a774')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.24)'}}>
          Darken 1
        </button>
        <button onClick={() => copyText('#40845c')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
          Darken 2
        </button>
        <button onClick={() => copyText('#2f6143')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.56)'}}>
          Darken 3
        </button>
        <button onClick={() => copyText('#1e3e2b')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.72)'}}>
          Darken 4
        </button>
        <button onClick={() => copyText('#040906')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.96)'}}>
          Darken 5
        </button>
      </div>

    </section>

    <section className={`${styles.sectionBlue} ${styles.gap40}`}>
      <h1 className={styles.fw_300}>
        International WG2 Blue
      </h1>

      <p>
        <strong>Pantone 2736</strong><br />
        <strong>CMYK 100 90 0 2</strong><br />
        <strong>HEX #002199</strong>
      </p>
      
      <div className={styles.paragraphColumn}>
        <div>
          <p>International WG2 Blue is a vibrant and intense shade of blue. This deep blue color has a rich and velvety texture, with a hint of ultraviolet that gives it a luminous quality. International WG2 Blue is a color that embodies both mystery and depth, which evokes the infinite expanse of the sky and the ocean.</p>
          <p className={styles.pt_3}>The HEX code for International WG2 Blue is <strong>#002199</strong>. Click on the buttons below to copy the color as well as the shades of it.</p>
        </div>
      </div>

      <button onClick={() => copyText('#002199')} style={{backgroundColor: 'rgba(106, 220, 153, 0.08)', color: 'white'}}>
        International WG2 Blue
      </button>

      <div className={styles.colorButtons}>
        <button onClick={() => copyText('#3d56b1')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.24)'}}>
          Lighten 1
        </button>
        <button onClick={() => copyText('#667ac2')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
          Lighten 2
        </button>
        <button onClick={() => copyText('#010204')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.56)'}}>
          Lighten 3
        </button>
        <button onClick={() => copyText('#b8c1e2')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.72)'}}>
          Lighten 4
        </button>
        <button onClick={() => copyText('#f5f6fb')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.96)'}}>
          Lighten 5
        </button>
        <button onClick={() => copyText('#001974')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.24)'}}>
          Darken 1
        </button>
        <button onClick={() => copyText('#00145c')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
          Darken 2
        </button>
        <button onClick={() => copyText('#000f43')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.56)'}}>
          Darken 3
        </button>
        <button onClick={() => copyText('#00092b')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.72)'}}>
          Darken 4
        </button>
        <button onClick={() => copyText('#000106')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.96)'}}>
          Darken 5
        </button>
      </div>

    </section>

    <section className={`${styles.sectionPink} ${styles.gap40}`}>
      <h1 className={styles.fw_300}>
        Aurora Pink
      </h1>

      <p>
        <strong>Pantone 252</strong><br />
        <strong>CMYK 26 67 0 0</strong><br />
        <strong>HEX #B53DFF</strong>
      </p>
      
      <div className={styles.paragraphColumn}>
        <div>
          <p>Aurora Pink is a vibrant and enchanting shade that captures the spirit of the Northern Lights. This bright pink hue has a touch of purple undertone, which gives it a bold and captivating quality. Like the Aurora Borealis, Aurora Pink is a color that can be both dramatic and playful. When you pair Aurora Pink with white or gray tones, it can create a fresh and modern look, and when you combine it with deep purples or blues, it can add depth and richness.</p>
          <p className={styles.pt_3}>The HEX code for Aurora Pink is <strong>#B53DFF</strong>. Click on the buttons below to copy the color as well as the shades of it.</p>
        </div>
      </div>

      <button onClick={() => copyText('#B53DFF')} style={{backgroundColor: 'rgba(43, 4, 62, 0.08)'}}>
        Aurora Pink
      </button>

      <div className={styles.colorButtons}>
        <button onClick={() => copyText('#C76CFF')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.24)'}}>
          Lighten 1
        </button>
        <button onClick={() => copyText('#D38BFF')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
          Lighten 2
        </button>
        <button onClick={() => copyText('#DEAAFF')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.56)'}}>
          Lighten 3
        </button>
        <button onClick={() => copyText('#EAC9FF')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.72)'}}>
          Lighten 4
        </button>
        <button onClick={() => copyText('#FCF7FF')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.96)'}}>
          Lighten 5
        </button>
        <button onClick={() => copyText('#8A2EC2')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.24)'}}>
          Darken 1
        </button>
        <button onClick={() => copyText('#6D2599')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
          Darken 2
        </button>
        <button onClick={() => copyText('#501B70')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.56)'}}>
          Darken 3
        </button>
        <button onClick={() => copyText('#331147')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.72)'}}>
          Darken 4
        </button>
        <button onClick={() => copyText('#07020A')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.96)'}}>
          Darken 5
        </button>
      </div>

    </section>

    <section className={`${styles.sectionPurple} ${styles.gap40}`}>
      <h1 className={styles.fw_300}>
        Aurora Purple
      </h1>

      <p>
        <strong>Pantone 2623</strong><br />
        <strong>CMYK 66 100 0 20</strong><br />
        <strong>HEX #2B043E</strong>
      </p>
      
      <div className={styles.paragraphColumn}>
        <div>
          <p>Aurora Purple is a deep and mysterious shade that takes inspiration from the elusive Northern Lights. This rich purple color has a dark and moody quality, which is perfect for creating a sense of intrigue and allure. The subtle blue undertone in Aurora Purple adds a coolness to the color that gives it a sophisticated and calming effect. When you pair Aurora Purple with metallic gold or silver tones, it can create an elegant and modern look, and when you combine it with warm neutrals, it can give a cozy and inviting vibe.</p>
          <p className={styles.pt_3}>The HEX code for Aurora Pink is <strong>#2B043E</strong>. Click on the buttons below to copy the color as well as the shades of it.</p>
        </div>
      </div>

      <button onClick={() => copyText('#2B043E')} style={{backgroundColor: 'rgba(181, 61, 255, 0.08)', color: '#b53dff'}}>
        Aurora Purple
      </button>

      <div className={styles.colorButtons}>
        <button onClick={() => copyText('#664178')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.24)'}}>
          Lighten 1
        </button>
        <button onClick={() => copyText('#866994')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
          Lighten 2
        </button>
        <button onClick={() => copyText('#C7B9CD')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.56)'}}>
          Lighten 3
        </button>
        <button onClick={() => copyText('#C7B9CD')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.72)'}}>
          Lighten 4
        </button>
        <button onClick={() => copyText('#F7F5F8')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.96)'}}>
          Lighten 5
        </button>
        <button onClick={() => copyText('#29043B')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.24)'}}>
          Darken 1
        </button>
        <button onClick={() => copyText('#20032E')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
          Darken 2
        </button>
        <button onClick={() => copyText('#180222')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.56)'}}>
          Darken 3
        </button>
        <button onClick={() => copyText('#0F0116')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.72)'}}>
          Darken 4
        </button>
        <button onClick={() => copyText('#020003')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.96)'}}>
          Darken 5
        </button>
      </div>

    </section>

    <section className={`${styles.sectionGrey} ${styles.gap40}`}>
      <h1 className={styles.fw_300}>
        Utility Colors
      </h1>
      
      <div className={styles.paragraphColumn}>
        <div>
          <p>Besides our brand colors, we also need a bunch of other colors — colors that would say something is safe, or warn us of danger. Or perhaps sometimes there is just a need for some nice shades of gray. Those are <strong>Utility Colors</strong>. </p>
          <p className={styles.pt_3}>Don't use these colors mixed with our brand colors. Click on the buttons below to copy the HEX codes fro each color.</p>
        </div>
      </div>

      <div className={`${styles.colorButtons} ${styles.fourColumnGrid}`}>
        <button onClick={() => copyText('#1E88E5')} className={styles.btnTextDark} style={{backgroundColor: '#1e88e5', color: 'white'}}>
          Blue
        </button>
        <button onClick={() => copyText('#FDD835')} className={styles.btnTextDark} style={{backgroundColor: '#fdd835'}}>
          Yellow
        </button>
        <button onClick={() => copyText('#E53935')} className={styles.btnTextDark} style={{backgroundColor: '#e53935', color: 'white'}}>
          Red
        </button>
        <button onClick={() => copyText('#F9F1E2')} className={styles.btnTextDark} style={{backgroundColor: '#f9f1e2'}}>
          Backdrop
        </button>
      </div>

      <button onClick={() => copyText('#546E7A')} style={{backgroundColor: 'rgba(255, 255, 255, 0.08)', color: 'white'}}>
        UI Grey
      </button>

      <div className={styles.colorButtons}>
        <button onClick={() => copyText('#7D919A')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.24)'}}>
          Lighten 1
        </button>
        <button onClick={() => copyText('#98A8AF')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
          Lighten 2
        </button>
        <button onClick={() => copyText('#B4BFC4')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.56)'}}>
          Lighten 3
        </button>
        <button onClick={() => copyText('#CFD6DA')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.72)'}}>
          Lighten 4
        </button>
        <button onClick={() => copyText('#F8F9FA')} className={styles.btnTextDark} style={{backgroundColor: 'rgba(255, 255, 255, 0.96)'}}>
          Lighten 5
        </button>
        <button onClick={() => copyText('#40545D')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.24)'}}>
          Darken 1
        </button>
        <button onClick={() => copyText('#324249')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
          Darken 2
        </button>
        <button onClick={() => copyText('#253036')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.56)'}}>
          Darken 3
        </button>
        <button onClick={() => copyText('#181F22')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.72)'}}>
          Darken 4
        </button>
        <button onClick={() => copyText('#030405')} className={styles.btnTextWhite} style={{backgroundColor: 'rgba(0, 0, 0, 0.96)'}}>
          Darken 5
        </button>
      </div>

    </section>

    <section className={`${styles.sectionGreen} ${styles.gap40}`} id="typography">
      <h1>
        Typography
      </h1>
      <h1 className={styles.fw_300}>
        Inter
      </h1>

      <div className={styles.paragraphColumn}>
        <p>Inter is a popular open-source typeface designed by Rasmus Andersson. It was created with the purpose of being a legible, versatile, and modern font suitable for a wide range of digital applications. This includes websites, mobile apps, and user interfaces. Inter features a balanced and consistent design, with various weights and styles that you can use for different purposes, from body text to headlines. Its simple and clean lines make it easy to read on screens of all sizes, and its multilingual support makes it accessible to users from all over the world.</p>
        <p className={styles.pt_3}>We use Inter for everything from the wordmark in our logo to the branding and the interfaces of our products. Inter is part of <strong>Google Fonts</strong>.</p>
      </div>

      <h1>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ?!()[]{}&*^%$#@~</h1>

      <h1 className={styles.fw_300}>The quick brown fox jumps over the lazy dog</h1>

      <h3 className={styles.fw_300}>Le vif renard brun saute par-dessus le chien paresseux</h3>

    </section>

    <section className={`${styles.sectionPink} ${styles.gap40}`} id="toneofvoice">
      <h1>
        Tone of Voice
      </h1>

      <div className={styles.paragraphColumn}>
        <p>Our tone of voice rests on the following principles:</p>

        <ul>
          <li><strong>Be casual but knowledgeable</strong>: Find a balance between down to earth and intelligent content.</li>
          <li>Avoid buzzwords whenever possible.</li>
          <li><strong>Be transparent</strong>: Be more open than our competitors about our platform, traffic, and business model</li>
          <li><strong>Be positive</strong>: Talk about the telecom industry's operator incumbents and legacy vendors as heros, not villains or idiots</li>
        </ul>
      </div>

    </section>

    <section className={`${styles.sectionBlue} ${styles.gap40}`} id="downloads">
      <h1>
        The good stuff!
      </h1>

      <h3 className={`${styles.downloadLink} ${styles.fw_300}`}>
        <a href="#">
          Download all WG2 logos
          <div className={styles.downloadLinkIconContainer}>
            <img src={require("!file-loader!./link-icon.svg").default} />
          </div>
        </a>
      </h3>
    </section>

    <section className={`${styles.sectionWhite}`} id="ourstory">
      <h1 style={{color: 'var(--wg2-aurora-green)'}}>
        Our story
      </h1>

      <div className={styles.multiColumn}>
        <div>
          <ul style={{marginTop: 0}}>
            <li>Here’s to a small group of people working together to upend a giant industry.</li>
            <li>Here’s to creating business value, not building custom infrastructure.</li>
            <li>Here’s to making mobile connectivity as valuable as it can be. </li>
          </ul>
          <p>We take inspiration from a little band of telecom scientists who sought to define what ultimately became one of the world’s most important standards: The Global System for Mobile Communications (GSM). Picture them, with their 1980s-style beards and practical tweed suits, as they fought the technology giants and national governments of the day to set that standard. They were Working Group Two.</p>
        </div>
        <div>
          <p>In 2017, the modern-day Working Group Two spun out of Telenor Group to define a new future for the telecom industry. We use the best elements of the mobile industry - its ubiquity, its trust, its reliability - while rebuilding it to be competitive in a commercial and technological reality that has largely bypassed it.</p>
          <p>We are on a mission to give operators global scale and innovation capacity. </p>
          <p><strong>We are WG2.</strong></p>
        </div>
      </div>

    </section>

    <section className={`${styles.section} ${styles.footer}`}>
      <p>© 2023 Working Group Two</p>
    </section>

  </div>
)
