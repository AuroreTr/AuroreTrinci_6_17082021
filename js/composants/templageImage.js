export class TemplateImage {

    constructor (id, source, image, title, description) {
        this.id = id;
        this.source = source;
        this.image = image;
        this.title = title;
        this.description = description;
    }

    html() {
        return `
        <img tabindex="0" class='media' src='${this.source}${this.image}' tilte="${this.title}" onclick="page.startLightbox('${this.id}')" alt='${this.description}'>
        `;
    }
}