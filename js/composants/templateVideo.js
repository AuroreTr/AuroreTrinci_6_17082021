export class TemplateVideo {

    constructor (id, source, video, description) {
        this.id = id;
        this.source = source;
        this.video = video;
        this.description = description;
    }

    html() {
        return `
        <video tabindex="0" class='media' alt='${this.description}' onclick="page.startLightbox('${this.id}')">
          <source src='${this.source}${this.video}' type='video/mp4'>
          <p>Votre navigateur ne prend pas en charge les videos</p>
        </video>`;
    }
}