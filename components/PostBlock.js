export const PostBlock = (post) => {
  const {
    title,
    image: { src, description, width, height },
    time: { posted, ago },
    person: { name, quote },
    comments,
    views,
  } = post;

  return `<li class="post__item">
  <div class="post__title post-title accordion">
    <span>${title}</span>
    <div class="post-title__wrapper">
      <div class="post-title__icon">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.65 5.15343C9.65 4.79445 9.35898 4.50344 9 4.50344C8.64102 4.50344 8.35 4.79445 8.35 5.15343V9.65344C8.35 10.0124 8.64102 10.3034 9 10.3034H13C13.359 10.3034 13.65 10.0124 13.65 9.65344C13.65 9.29445 13.359 9.00344 13 9.00344H9.65V5.15343Z"
            fill="#505050"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM9 1.3C4.74741 1.3 1.3 4.74741 1.3 9C1.3 13.2526 4.74741 16.7 9 16.7C13.2526 16.7 16.7 13.2526 16.7 9C16.7 4.74741 13.2526 1.3 9 1.3Z"
            fill="#505050"
          />
        </svg>
      </div>
      <span>${ago} minutes ago</span>
      <div class="post-title__arrow arrow">
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.119629 1.56008C0.119629 1.38008 0.189628 1.21008 0.329628 1.08008C0.599628 0.840084 1.00963 0.860084 1.24963 1.12008L6.98993 7.48922L12.5399 1.08006C12.7799 0.810057 13.1899 0.800057 13.4599 1.04006C13.7199 1.28006 13.7399 1.69006 13.4999 1.96006L7.50993 8.85922C7.22993 9.16922 6.74993 9.16922 6.46993 8.85922L0.289627 2.00008C0.169627 1.87008 0.119629 1.72008 0.119629 1.56008Z"
            fill="#505050"
          />
        </svg>
      </div>
    </div>
  </div>
  <div class="post__wrapper ">
    <div class="post__pic pic">
      <img
        class="pic__img"
        src="/src/${src}"
        width=${width}
        height=${height}
        alt=${description}
      />
    </div>
    <div class="post__person person">
      <div class="person__name">
        <a class="person__link">
          <div class="svg-container">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V9C16 10.6569 14.6569 12 13 12H5.52219L2.1121 14.7281C1.26091 15.409 0 14.803 0 13.7129V3ZM1.3 13.7129L5.06617 10.7H13C13.9389 10.7 14.7 9.93888 14.7 9V3C14.7 2.06112 13.9389 1.3 13 1.3H3C2.06112 1.3 1.3 2.06112 1.3 3L1.3 13.7129ZM4.49219 4.64356C4.49219 4.28458 4.7832 3.99356 5.14219 3.99356H10.8579C11.2169 3.99356 11.5079 4.28458 11.5079 4.64356C11.5079 5.00255 11.2169 5.29356 10.8579 5.29356L5.14219 5.29356C4.7832 5.29356 4.49219 5.00255 4.49219 4.64356ZM4.49219 7.63611C4.49219 7.27713 4.7832 6.98611 5.14219 6.98611L8.79121 6.98611C9.1502 6.98611 9.44121 7.27713 9.44121 7.63611C9.44121 7.9951 9.1502 8.28611 8.79121 8.28611H5.14219C4.7832 8.28611 4.49219 7.9951 4.49219 7.63611Z"
                fill="#505050"
              />
            </svg>
          </div>
          <span><span class="person__link--user">${name}</span>commented:</span>
        </a>
      </div>
      <div class="person__quote quote">
        <p class="quote__text">${quote}</p>
        <div class="quote__block">
          <span>– ${name.match(/^\S+/)?.[0]},</span>
          <span class="quote__block--time">${posted} am</span>
        </div>
      </div>
      <div class="person__reaction reaction">
        <div class="reaction__block reaction__block--view">
          <div class="svg-container reaction--container">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.30609 4.08066C9.68228 3.99158 10 4.3134 10 4.7V5.7C10 6.41797 10.5821 7 11.3 7H12.3C12.6866 7 13.0085 7.31775 12.9194 7.69395C12.6062 9.01621 11.418 10 10 10C8.34318 10 7.00003 8.65685 7.00003 7C7.00003 5.58201 7.98382 4.39379 9.30609 4.08066Z"
                fill="#505050"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C5.11931 0 1.86625 3.65464 0.43688 5.68254C-0.126096 6.48125 -0.126095 7.51875 0.43688 8.31746C1.86626 10.3454 5.11931 14 10 14C14.8808 14 18.1338 10.3454 19.5632 8.31746C20.1262 7.51875 20.1262 6.48124 19.5632 5.68254C18.1338 3.65464 14.8808 0 10 0ZM3.70874 3.92728C2.76185 4.77768 2.02109 5.69143 1.49945 6.4315C1.25305 6.78108 1.25305 7.21892 1.49945 7.5685C2.02109 8.30857 2.76185 9.22232 3.70873 10.0727C3.25483 9.14511 3.00004 8.10231 3.00004 7C3.00004 5.89769 3.25483 4.85489 3.70874 3.92728ZM10 12.7C6.85202 12.7 4.30004 10.148 4.30004 7C4.30004 3.85198 6.85202 1.3 10 1.3C13.1481 1.3 15.7 3.85198 15.7 7C15.7 10.148 13.1481 12.7 10 12.7ZM16.2913 3.92728C17.2382 4.77768 17.979 5.69143 18.5006 6.4315C18.747 6.78108 18.747 7.21892 18.5006 7.5685C17.979 8.30857 17.2382 9.22232 16.2913 10.0727C16.7452 9.14511 17 8.10231 17 7C17 5.89769 16.7452 4.85489 16.2913 3.92728Z"
                fill="#505050"
              />
            </svg>
          </div>
          <span>${views}</span>
        </div>
        <div class="reaction__block reaction__block--comments">
          <div class="svg-container reaction--container">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V9C16 10.6569 14.6569 12 13 12H5.52219L2.1121 14.7281C1.26091 15.409 0 14.803 0 13.7129V3ZM1.3 13.7129L5.06617 10.7H13C13.9389 10.7 14.7 9.93888 14.7 9V3C14.7 2.06112 13.9389 1.3 13 1.3H3C2.06112 1.3 1.3 2.06112 1.3 3L1.3 13.7129ZM4.49219 4.64356C4.49219 4.28458 4.7832 3.99356 5.14219 3.99356H10.8579C11.2169 3.99356 11.5079 4.28458 11.5079 4.64356C11.5079 5.00255 11.2169 5.29356 10.8579 5.29356L5.14219 5.29356C4.7832 5.29356 4.49219 5.00255 4.49219 4.64356ZM4.49219 7.63611C4.49219 7.27713 4.7832 6.98611 5.14219 6.98611L8.79121 6.98611C9.1502 6.98611 9.44121 7.27713 9.44121 7.63611C9.44121 7.9951 9.1502 8.28611 8.79121 8.28611H5.14219C4.7832 8.28611 4.49219 7.9951 4.49219 7.63611Z"
                fill="#505050"
              />
            </svg>
          </div>
          <span>${comments}</span>
        </div>
      </div>
    </div>
  </div>
</li>`;
};
