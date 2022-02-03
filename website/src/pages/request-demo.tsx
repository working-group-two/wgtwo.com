import React from "react";
import Layout from "@theme/Layout";
import common from "../css/common.module.css";
import styles from "./contact.module.css";
import message from "../util/message";

let form = {
  company: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  name: React.createRef<HTMLInputElement>(),
  subscriptionCount: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLInputElement>(),
  button: React.createRef<HTMLButtonElement>(),
};

function RequestDemo() {
  return (
    <Layout title="Request a Demo">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>Request a demo.</div>
              <div className={common.subtitle}>
                <br />
                We'd love to show you around.
              </div>
            </div>
          </div>
          <div className={common.container}>
            <div className={styles.form}>
              <input ref={form.company} placeholder="Company" />
              <input ref={form.email} placeholder="Work email address" />
              <input ref={form.name} placeholder="Name" />
              <input ref={form.subscriptionCount} placeholder="Subscription count" />
              <input ref={form.message} placeholder="Most interested in ..." className={styles.span2} />
              <button
                ref={form.button}
                onClick={() => sendMessage()}
                className={`${common.button} ${common.buttonPrimary} ${styles.span2}`}>
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function sendMessage() {
  message(
    `Message from wgtwo.com/request-demo\nName: ${form.name.current.value} \nEmail: ${form.email.current.value}\nCompany: ${form.company.current.value}\nNumber of Subscribers: ${form.subscriptionCount.current.value}\nMessage - Most Interested in: ${form.message.current.value}`
  );

  form.company.current.disabled = true;
  form.email.current.disabled = true;
  form.name.current.disabled = true;
  form.subscriptionCount.current.disabled = true;
  form.message.current.disabled = true;

  form.button.current.innerText = "Request Sent!";
  form.button.current.disabled = true;
}

export default RequestDemo;
