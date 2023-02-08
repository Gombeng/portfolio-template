

const Contact = () => {
  return (
    <div id="contact" className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-3 bg-light w-75">
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Your email..." />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea type="email" class="form-control" id="message" placeholder="Your message..." />
          </div>
          <button type="submit" class="btn btn-outline-danger p-2 px-5 rounded-5">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact