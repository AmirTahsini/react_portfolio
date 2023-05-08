import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <div class="form-outline mb-4">
          <input type="text" id="form4Example1" class="form-control" />
          <label class="form-label" for="form4Example1">
            Name
          </label>
        </div>
        <div class="form-outline mb-4">
          <input type="email" id="form4Example2" class="form-control" />
          <label class="form-label" for="form4Example2">
            Email address
          </label>
        </div>
        <div class="form-outline mb-4">
          <textarea class="form-control" id="form4Example3" rows="4"></textarea>
          <label class="form-label" for="form4Example3">
            Message
          </label>
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </div>
  );
}
