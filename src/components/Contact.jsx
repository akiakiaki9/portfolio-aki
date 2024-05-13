import React from 'react'

export default function Contact() {
  return (
    <div id="contacts" class="contacts">
        <div class="contacts-sar">
            <h1>Contact <span class="color-main">Me</span>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon class="lord-icon" src="https://cdn.lordicon.com/srsgifqc.json" trigger="loop" delay="500">
                </lord-icon>
            </h1>
        </div>
        <form class="contacts-blok">
            <div class="contacts-blok__section">
                <input class="contacts-blok__section-input-1" type="text" placeholder="Full Name" />
                <input class="contacts-blok__section-input-1" type="email" placeholder="Email" />
                <input class="contacts-blok__section-input-1" type="tel" placeholder="Phone Number" />
                <input class="contacts-blok__section-input-1" type="text" placeholder="Subject" />
            </div>
            <div class="contacts-blok__section">
                <textarea class="contacts-blok__section-input-2" type="text" cols="30" rows="10"
                    placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </div>
        </form>
    </div>
  )
}
