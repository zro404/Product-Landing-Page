import { useState } from "react";

enum MailStatus {
  ACCEPTED,
  REJECTED,
  PROCESSING,
  IDLE,
}

export const Notify = () => {
  const [mail, setMail] = useState("");
  const [isMailAccepted, setIsMailAccepted] = useState(MailStatus.IDLE);

  const isGmailAddress = (email) =>
    /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  const handleClick = () => {
    if (isGmailAddress(mail)) {
      setIsMailAccepted(MailStatus.ACCEPTED);
    } else {
      setIsMailAccepted(MailStatus.REJECTED);
    }
  };
  return (
    <div id="notify">
      <input
        id="input-mail"
        value={mail}
        onChange={({ target: { value } }) => {
          value != null && setMail(value);
        }}
        placeholder="Please enter your email id"
      />
      <button
        id="notify-button"
        disabled={!mail || isMailAccepted == MailStatus.ACCEPTED}
        style={mail ? { color: "#ffffff" } : { color: "#ffffff80" }}
        onClick={handleClick}
      >
        {isMailAccepted == MailStatus.IDLE ||
        isMailAccepted == MailStatus.REJECTED ? (
          <>Notify Me</>
        ) : (
          <></>
        )}
        {isMailAccepted == MailStatus.ACCEPTED && <img id="tick" />}
      </button>
    </div>
  );
};
