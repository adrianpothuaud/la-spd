const testimonials = [
  {
    completeName: "Prénom NOM",
    employer: "Employeur",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dapibus nulla. Ut eu ultrices nisl, mollis viverra mauris. Cras condimentum mauris commodo tortor porta commodo.",
    date: "2111-01-01T12:00:00.000Z"
  },
  {
    completeName: "Prénom NOM",
    employer: "Employeur",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dapibus nulla. Ut eu ultrices nisl, mollis viverra mauris. Cras condimentum mauris commodo tortor porta commodo.",
    date: "2111-01-01T12:00:00.000Z"
  },
  {
    completeName: "Prénom NOM",
    employer: "Employeur",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dapibus nulla. Ut eu ultrices nisl, mollis viverra mauris. Cras condimentum mauris commodo tortor porta commodo.",
    date: "2111-01-01T12:00:00.000Z"
  },
  {
    completeName: "Prénom NOM",
    employer: "Employeur",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dapibus nulla. Ut eu ultrices nisl, mollis viverra mauris. Cras condimentum mauris commodo tortor porta commodo.",
    date: "2111-01-01T12:00:00.000Z"
  },
  {
    completeName: "Prénom NOM",
    employer: "Employeur",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dapibus nulla. Ut eu ultrices nisl, mollis viverra mauris. Cras condimentum mauris commodo tortor porta commodo.",
    date: "2111-01-01T12:00:00.000Z"
  },
]

let displayTestimonialAt = 0

const changeTestimonialDisplay = () => {
  testimonials.forEach((testimonial, testimonialIndex) => {
    if (displayTestimonialAt === testimonialIndex) {
      const container = document.getElementById("testimonial-articles")

      const article = document.createElement("article")
      article.className = "bg-article testimonial-card"
      article.setAttribute("article-id", testimonialIndex)
    
      const header = document.createElement("div")
      header.className = "testimonial-header"
    
      const author = document.createElement("span")
      author.innerText = testimonial.completeName
    
      const employer = document.createElement("span")
      employer.innerText = testimonial.employer
    
      header.appendChild(author)
      header.appendChild(employer)
    
      article.appendChild(header)
    
      const body = document.createElement("div")
      body.className = "testimonial-body"
    
      body.innerText = testimonial.body
    
      article.appendChild(body)
    
      const footer = document.createElement("div")
      footer.className = "testimonial-footer"
    
      footer.innerText = `le ${new Date(testimonial.date).toLocaleDateString()} à ${new Date(testimonial.date).toLocaleTimeString()}`
    
      article.appendChild(footer)
    
      container.appendChild(article)
    }
  })
}

changeTestimonialDisplay()