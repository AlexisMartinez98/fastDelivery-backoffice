import Link from "next/link";
import React from "react";
import ViewPassword from "../components/commons/ViewPassword";

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-20">
        <svg
          width="258"
          height="125"
          viewBox="0 0 258 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_161_1237)">
            <g clipPath="url(#clip0_161_1237)">
              <path
                d="M233.317 75.6482H220.049C220.938 73.9854 221.448 72.0907 221.448 70.0834C221.448 63.5514 216.133 58.2449 209.605 58.2449H201.308C200.447 47.6718 191.984 39.3445 181.692 39.3445H122.327C123.771 37.8142 124.752 36.0652 125.242 34.0513C126.117 30.5004 125.786 26.8701 124.235 22.9614C123.433 20.9409 121.651 19.7352 119.464 19.7352C119.344 19.7352 119.225 19.7352 119.099 19.7484C117.244 19.8544 115.958 20.7488 115.183 21.2854L115.143 21.3119C112.764 22.9614 110.219 24.1141 107.475 24.8097C110.371 22.1267 111.975 18.4698 111.995 14.495C112.035 6.59164 105.706 0.0927467 97.8859 0H97.7069C89.7147 0 83.3991 6.28028 83.3195 14.2962C83.293 17.0323 84.1148 19.7418 85.6059 22.0737C85.1619 21.875 84.7178 21.6829 84.2672 21.4709C78.548 18.7613 73.1536 17.4364 67.7658 17.4165H67.5802C65.7909 17.4165 64.0612 17.549 62.4376 17.814C55.3864 18.9535 49.2563 22.0075 44.2198 26.8899C42.2581 28.7912 40.7405 31.0768 39.6736 33.6869H29.4811C25.4784 33.6869 22.2245 36.9397 22.2245 40.9411C22.2245 42.1269 22.5161 43.2398 23.0197 44.2269H11.2633C7.26052 44.2203 4 47.4731 4 51.4744C4 55.4758 7.2539 58.7285 11.2567 58.7285H28.2352C27.6123 60.2986 26.9363 62.1469 26.7574 64.2205C26.5586 66.5325 27.44 68.0165 28.2087 68.8578C28.9775 69.6992 30.3824 70.6995 32.7085 70.7128C32.788 70.7128 32.8609 70.7128 32.9405 70.7128C34.3255 70.7128 35.4853 70.3285 36.5257 69.9178C38.8584 68.9969 40.6146 67.5527 42.0991 65.9959C42.2846 66.1947 42.4768 66.3934 42.6624 66.5855C44.8957 68.8909 47.9641 71.8125 51.9072 73.939C53.829 74.9725 55.8039 75.4958 57.7721 75.4958C58.7066 75.4958 59.6542 75.3766 60.5754 75.1447C66.9043 73.5415 70.0786 68.7916 71.921 65.3533C72.3053 64.6445 73.0674 63.5116 75.758 62.816C76.6461 62.5577 78.5348 62.3722 78.6011 62.3722C79.5885 62.3722 80.0855 62.9088 80.3175 63.876C80.4699 64.5186 80.5627 65.1877 80.5958 65.8634C80.7085 68.5994 80.1054 71.3819 79.5023 73.7469C79.0848 75.37 79.0981 76.781 79.5222 77.9801C74.0549 80.842 70.019 86.0756 68.793 92.3095H34.5575C27.7515 92.3095 22.2178 97.8412 22.2178 104.645C22.2178 111.448 27.7515 116.98 34.5575 116.98H233.31C244.715 116.98 253.993 107.705 253.993 96.3042C253.993 84.903 244.715 75.6283 233.31 75.6283L233.317 75.6482Z"
                fill="white"
              />
              <path
                d="M67.7525 21.3848C72.9879 21.4046 77.8787 22.8356 82.5707 25.0615C87.2825 27.2941 92.1932 28.8973 97.4021 29.4007C104.619 30.0963 111.372 28.7714 117.416 24.5779C117.999 24.1738 118.576 23.7631 119.324 23.7167C119.888 23.6836 120.299 23.8426 120.531 24.4255C121.651 27.2411 122.101 30.1295 121.372 33.0974C120.71 35.7936 118.808 37.536 116.475 38.841C114.069 40.1859 111.445 40.8417 108.714 41.067C105.355 41.3518 101.975 41.5042 98.6215 41.8354C95.8248 42.107 93.0282 42.5045 90.5961 44.1143C88.9857 45.1809 87.8988 46.6384 87.2626 48.4469C87.0174 49.1492 87.2096 49.3479 87.9452 49.1624C89.4231 48.7981 90.9009 48.4801 92.4318 48.5463C95.4206 48.6788 97.031 50.1694 97.3292 53.124C97.5943 55.7938 96.8388 58.298 95.964 60.7624C94.9832 63.5249 93.724 66.1748 92.3589 68.7651C91.8817 69.6727 91.8883 69.6926 92.8758 69.8317C95.1224 70.1364 97.4087 70.1629 99.5956 70.8718C100.318 71.1036 101.014 71.3885 101.69 71.7396C103.413 72.6141 103.32 74.204 102.459 75.4429C101.643 76.6088 100.669 76.8473 99.1185 77.4965C99.0588 77.523 98.9859 77.5495 98.9197 77.5628C96.3086 78.2915 93.6511 78.901 90.9274 78.8281C88.1904 78.7552 85.2149 78.0862 85.0757 78.0332C83.2466 77.3177 82.8755 76.6221 83.3593 74.7406C84.1214 71.7727 84.7046 68.785 84.5787 65.7045C84.5389 64.7704 84.413 63.8561 84.1943 62.9552C83.4918 60.0337 81.285 58.457 78.2498 58.6292C77.0172 58.7021 75.8442 59.0333 74.6712 59.3712C74.479 59.4242 74.247 59.6362 74.0615 59.4441C73.8362 59.2188 74.0747 58.9803 74.1609 58.775C75.7912 54.8531 80.6488 43.1869 81.4706 41.2856C81.7622 40.6032 81.5832 40.2256 80.9271 39.8944C78.4354 38.6423 75.8309 37.6486 73.2927 36.5025C69.6876 34.8794 66.0626 33.2895 62.4442 31.6863C61.3905 31.2226 61.0989 31.3352 60.688 32.4283C59.8331 34.7006 58.7463 36.8404 57.2817 38.8013C55.9298 40.6165 54.2266 41.9812 52.1457 42.8093C49.9787 43.6705 47.7387 43.5777 45.5253 42.9285C45.1674 42.8225 44.8162 42.7033 44.4649 42.5774C42.8811 41.9944 41.9533 40.3515 42.2913 38.7019C42.9871 35.2902 44.4318 32.2096 46.9899 29.7254C51.483 25.3663 56.8841 22.723 63.0738 21.7226C64.6179 21.4709 66.1819 21.3715 67.7525 21.3781V21.3848Z"
                fill="white"
              />
              <path
                d="M32.8013 66.7445C31.3433 66.7445 30.6077 66.0092 30.7336 64.565C30.8662 63.0214 31.3964 61.564 31.9663 60.1396C33.3712 56.602 35.3593 53.442 38.2355 50.8782C39.3952 49.8447 39.4549 49.8315 40.8797 50.4542C49.3226 54.184 57.7721 57.9005 66.215 61.6236C66.838 61.9018 67.4543 62.1999 68.0574 62.5179C68.4351 62.7167 68.6737 63.028 68.4285 63.4785C66.4536 67.1685 63.8956 70.2026 59.6145 71.2891C57.5667 71.8125 55.6316 71.4216 53.8091 70.4345C50.648 68.7319 48.0104 66.3735 45.5385 63.8164C44.5842 62.8293 43.6565 61.8289 42.7419 60.8087C42.3973 60.4245 42.119 60.398 41.6816 60.663C41.1315 60.9942 40.7936 61.4911 40.3959 61.9548C38.8916 63.717 37.2812 65.3401 35.0744 66.2145C34.3454 66.506 33.6098 66.7644 32.8013 66.7246V66.7445Z"
                fill="white"
              />
              <path
                d="M97.7931 24.6706C91.3847 24.77 87.2494 19.4172 87.3024 14.336C87.362 8.41347 91.9612 3.90863 97.8394 3.97487C103.545 4.04112 108.052 8.71821 108.025 14.4751C107.999 20.868 102.445 24.7965 97.7931 24.6706Z"
                fill="white"
              />
              <path
                d="M124.182 54.4622C123.612 56.3767 123.427 57.0194 125.183 57.0194C126.939 57.0194 127.284 56.9399 127.966 56.9399C130.246 56.9399 130.219 57.2976 129.689 59.0995L129.583 59.4573C128.735 62.3324 128.616 62.7299 125.898 62.7299C125.097 62.7299 123.725 62.6504 123.122 62.6504C121.803 62.6504 121.684 62.9286 121.081 64.9691L119.285 71.044C118.814 72.6405 118.337 74.2371 115.945 74.2371H113.95C111.551 74.2371 112.021 72.6405 112.499 71.044L119 49.0696C119.358 47.8705 119.947 45.8765 122.34 45.8765H132.254C133.255 45.8765 134.017 46.274 133.778 47.0756L132.771 50.4741C132.532 51.2757 132.154 51.4744 130.716 51.4744C129.716 51.4744 129.464 51.3949 127.582 51.3949C125.103 51.3949 124.891 52.117 124.195 54.4688L124.182 54.4622Z"
                fill="#3D1DF3"
              />
              <path
                d="M145.906 72.2364C145.362 74.0715 144.077 74.2371 141.797 74.2371H139.676C137.198 74.2371 140.206 68.2483 138.609 68.2483H135.415C133.818 68.2483 132.963 74.2371 130.564 74.2371H128.689C126.608 74.2371 125.421 74.0781 125.965 72.2364C126.674 69.8383 128.258 67.725 136.893 49.0696C137.807 47.069 138.961 45.8765 140.558 45.8765H146.714C148.311 45.8765 148.755 47.0756 148.57 49.0696C146.442 65.4461 146.621 69.8449 145.912 72.2364H145.906ZM137.416 61.6103C137.224 62.2463 137.509 62.2463 138.788 62.2463C140.067 62.2463 140.346 62.2463 140.524 61.6501C140.571 61.4911 140.631 61.2923 140.67 61.0141C141.346 57.0988 142.619 52.2628 141.737 52.2628C140.856 52.2628 139.199 57.0591 137.628 61.0141C137.516 61.2526 137.456 61.4513 137.41 61.6103H137.416Z"
                fill="#3D1DF3"
              />
              <path
                d="M163.229 45.6711C166.549 45.6711 168.61 46.2674 168.279 47.387L167.371 50.4608C167.238 50.8981 166.854 51.6599 165.495 51.6599H165.177C164.541 51.6599 163.229 51.2227 162.069 51.2227C161.108 51.2227 160.253 51.5407 159.876 52.8193C159.511 54.0581 159.683 54.6941 160.863 55.9727C164.461 59.8879 164.594 62.6835 163.633 65.9231C163.09 67.7581 162.553 69.4408 161.055 70.9976C159.147 72.9983 156.84 73.7535 155.893 73.992C154.733 74.2703 153.162 74.4293 151.923 74.4293C148.967 74.4293 146.25 73.8728 146.727 72.2696L147.635 69.1957C147.775 68.7187 148.318 68.2351 149.398 68.2351C150.478 68.2351 151.141 68.8313 153.414 68.8313C154.534 68.8313 156.31 67.9502 156.675 66.7114C156.946 65.7906 157.105 65.1148 155.376 62.7167C152.732 59.0797 151.472 57.4036 152.44 54.131C154.766 46.2607 160.021 45.6645 163.216 45.6645L163.229 45.6711Z"
                fill="#3D1DF3"
              />
              <path
                d="M173.627 71.3156C173.097 72.8327 172.606 74.2305 170.366 74.2305H168.372C165.972 74.2305 166.443 72.6339 166.92 71.0374L172.321 52.7795C172.619 51.7792 172.487 51.5407 171.645 51.5407C171.367 51.5407 170.956 51.5804 170.472 51.5804C169.472 51.5804 168.723 51.4214 169.008 50.4608L170.015 47.0623C170.254 46.2607 171.248 45.8633 172.248 45.8633H183.276C184.276 45.8633 185.039 46.2607 184.8 47.0623L183.793 50.4608C183.508 51.4214 182.659 51.5804 181.665 51.5804C181.387 51.5804 181.036 51.5407 180.559 51.5407C179.558 51.5407 179.412 51.7792 179.114 52.7795L173.633 71.3156H173.627Z"
                fill="#3D1DF3"
              />
              <path
                d="M117.641 81.9947C126.435 81.9947 125.978 87.586 123.44 96.1783C121.014 104.367 118.443 110.362 109.251 110.362H103.26C100.861 110.362 101.332 108.765 101.809 107.169L108.31 85.1945C108.781 83.5979 109.258 82.0013 111.657 82.0013H117.648L117.641 81.9947ZM114.043 88.6261C112.711 93.1376 111.292 98.0532 109.901 102.77C109.596 103.81 109.39 104.764 110.113 104.764C113.108 104.764 114.016 102.366 115.912 95.973C117.568 90.3817 118.251 87.3873 115.255 87.3873C114.533 87.3873 114.295 87.7848 114.049 88.6261H114.043Z"
                fill="#3D1DF3"
              />
              <path
                d="M129.477 103.048C129.298 103.929 129.968 104.367 130.763 104.367C133.043 104.367 133.824 104.287 134.66 104.287C136.336 104.287 136.714 104.764 136.363 105.963L135.534 108.759C135.176 109.958 134.66 110.355 133.46 110.355H122.91C120.511 110.355 121.22 107.957 121.458 107.162L127.96 85.1879C128.43 83.5913 128.907 81.9947 131.3 81.9947H141.611C142.612 81.9947 143.374 82.3922 143.136 83.1938L142.128 86.5923C141.843 87.5529 141.035 87.5927 140.034 87.5927C138.477 87.5927 137.257 87.5132 136.263 87.5132C134.063 87.5132 133.831 88.3148 133.453 89.5933C132.685 92.1902 132.486 92.866 134.481 92.866C136.959 92.866 137.383 92.7865 138.298 92.7865C139.696 92.7865 139.365 94.1843 139.232 94.6215L138.477 97.1787C138.119 98.3778 137.257 98.4573 136.263 98.4573C134.222 98.4573 132.97 98.3778 132.128 98.3778C130.849 98.3778 130.683 98.9342 130.292 100.253L129.464 103.048H129.477Z"
                fill="#3D1DF3"
              />
              <path
                d="M150.127 104.565C151.804 104.565 151.744 105.446 151.393 106.645L151.24 107.162C150.77 108.759 150.293 110.355 147.9 110.355H138.868C136.469 110.355 136.939 108.759 137.416 107.162L143.918 85.1879C144.388 83.5913 144.865 81.9947 147.264 81.9947H149.259C151.658 81.9947 151.187 83.5913 150.71 85.1879L145.614 102.406C145.329 103.366 144.965 104.605 146.191 104.645C148.311 104.645 149.292 104.565 150.134 104.565H150.127Z"
                fill="#3D1DF3"
              />
              <path
                d="M158.948 107.162C158.477 108.759 158 110.355 155.608 110.355H153.606C151.207 110.355 151.684 108.759 152.155 107.162L158.656 85.1879C159.127 83.5913 159.604 81.9947 161.996 81.9947H163.998C166.397 81.9947 165.919 83.5913 165.449 85.1879L158.948 107.162Z"
                fill="#3D1DF3"
              />
              <path
                d="M182.348 81.955H183.905C185.622 81.955 186.563 82.1537 186.092 83.7503C185.728 84.9891 183.243 89.7391 174.773 107.162C173.786 109.156 172.626 110.355 171.029 110.355H166.032C164.435 110.355 163.991 109.156 164.223 107.162C166.337 89.7457 166.622 84.9891 166.993 83.7503C167.49 82.0742 168.537 81.9152 170.452 81.9152H172.169C174.289 81.9152 174.528 82.5976 173.329 88.9441C171.38 99.451 170.3 103.366 170.983 103.366C171.46 103.366 172.858 99.451 174.773 95.019C179.883 82.8758 179.757 81.955 182.355 81.955H182.348Z"
                fill="#3D1DF3"
              />
              <path
                d="M188.292 103.048C188.114 103.929 188.783 104.367 189.585 104.367C191.864 104.367 192.646 104.287 193.481 104.287C195.158 104.287 195.536 104.764 195.185 105.963L194.356 108.759C193.998 109.958 193.481 110.355 192.282 110.355H181.732C179.333 110.355 180.042 107.957 180.28 107.162L186.781 85.1879C187.252 83.5913 187.729 81.9947 190.128 81.9947H200.44C201.441 81.9947 202.203 82.3922 201.964 83.1938L200.957 86.5923C200.672 87.5529 199.863 87.5927 198.863 87.5927C197.305 87.5927 196.093 87.5132 195.092 87.5132C192.892 87.5132 192.66 88.3148 192.282 89.5933C191.513 92.1902 191.314 92.866 193.309 92.866C195.788 92.866 196.212 92.7865 197.126 92.7865C198.525 92.7865 198.193 94.1843 198.061 94.6215L197.305 97.1787C196.947 98.3778 196.086 98.4573 195.092 98.4573C193.057 98.4573 191.798 98.3778 190.957 98.3778C189.678 98.3778 189.512 98.9342 189.121 100.253L188.292 103.048Z"
                fill="#3D1DF3"
              />
              <path
                d="M213.866 81.9947C219.818 81.9947 220.235 86.2677 218.837 90.9845C217.988 93.8597 217.399 95.7014 214.556 97.6159C213.151 98.5765 212.601 98.0134 212.15 99.5371C211.666 101.173 211.593 103.174 212.912 103.174C213.634 103.174 214.131 102.975 214.251 102.975C215.53 102.975 215.411 104.055 214.867 105.89C214.609 106.771 214.251 107.851 213.893 109.044C213.654 109.845 213.124 110.561 211.043 110.561C207.365 110.561 206.292 107.845 206.404 104.89C206.543 101.173 205.536 100.537 205.298 100.537C204.979 100.537 204.787 101.173 204.695 101.498L203.018 107.169C202.547 108.765 202.07 110.362 199.678 110.362H196.881C195.284 110.362 195.755 108.765 196.225 107.169L202.726 85.1945C203.197 83.5979 203.674 82.0013 206.066 82.0013H213.86L213.866 81.9947ZM208.326 89.1031C208.174 89.6198 207.942 90.5407 207.69 91.382C207.451 92.1836 207.2 92.8991 207.06 93.3827C206.669 94.701 206.842 94.9395 208.439 94.9395C210.235 94.9395 211.156 93.184 211.686 91.382C212.216 89.5867 212.468 87.3873 210.672 87.3873C209.075 87.3873 208.75 87.6655 208.326 89.1031Z"
                fill="#3D1DF3"
              />
              <path
                d="M220.977 110.355C218.578 110.355 219.055 108.759 219.526 107.162L221.309 101.127C221.945 98.9674 221.348 93.9789 221.123 92.2962L221.083 92.018C220.818 90.2227 220.255 84.1478 220.586 83.0282C220.891 81.9881 221.772 81.9881 222.051 81.9881H226.61C227.889 81.9881 227.783 83.7039 227.664 85.1812C227.565 86.4598 227.558 90.9315 227.531 91.2959C227.492 91.5741 227.644 91.7331 227.803 91.7331C228.002 91.7331 228.201 91.6139 228.32 91.3356C228.466 90.9779 230.997 86.4598 231.7 85.1812C232.495 83.7039 233.483 81.9881 234.921 81.9881H238.479C239.679 81.9881 240.116 81.9881 239.811 83.0282C239.48 84.1478 235.351 90.2624 234.033 92.018C233.436 92.8196 232.217 94.6547 230.759 96.7348C228.598 99.8485 228.36 100.253 227.319 103.764L226.266 107.321C225.802 108.878 225.364 110.355 222.972 110.355H220.977Z"
                fill="#3D1DF3"
              />
              <path
                d="M124.229 22.9817C123.427 20.9611 121.644 19.7554 119.457 19.7554C119.338 19.7554 119.218 19.7554 119.093 19.7687C117.237 19.8747 115.951 20.769 115.176 21.3056L115.136 21.3321C112.757 22.9817 110.212 24.1344 107.469 24.83C110.365 22.147 111.968 18.4901 111.988 14.5152C112.021 6.61853 105.693 0.113008 97.8726 0.026886H97.6937C89.7014 0.026886 83.3858 6.30716 83.3063 14.3231C83.2798 17.0592 84.1015 19.7687 85.5926 22.1006C85.1486 21.9019 84.7046 21.7097 84.254 21.4978C78.5348 18.7882 73.1403 17.4633 67.7525 17.4434H67.567C65.7776 17.4434 64.048 17.5759 62.4244 17.8409C55.3731 18.9803 49.2431 22.0344 44.2065 26.9168C42.2449 28.8181 40.7273 31.1037 39.6603 33.7138H29.4679C25.4651 33.7138 22.2112 36.9666 22.2112 40.9679C22.2112 42.1538 22.5028 43.2667 23.0065 44.2538H11.2567C7.2539 44.2538 4 47.5066 4 51.5079C4 55.5093 7.2539 58.7621 11.2567 58.7621H28.2352C27.6123 60.3321 26.9363 62.1804 26.7574 64.254C26.5586 66.566 27.44 68.05 28.2087 68.8913C28.9775 69.7327 30.3824 70.733 32.7085 70.7463C32.788 70.7463 32.8609 70.7463 32.9405 70.7463C34.3255 70.7463 35.4853 70.362 36.5257 69.9513C38.8584 69.0304 40.6146 67.5863 42.0991 66.0294C42.2846 66.2282 42.4768 66.4269 42.6624 66.619C44.8957 68.9245 47.9641 71.846 51.9072 73.9725C53.829 75.006 55.8039 75.5293 57.7721 75.5293C58.7066 75.5293 59.6542 75.4101 60.5754 75.1782C66.9043 73.575 70.0786 68.8251 71.921 65.3868C72.3053 64.678 73.6639 63.7439 74.2338 63.5186C75.1682 63.1477 77.5142 62.4123 78.5679 62.611C79.5421 62.7899 80.0855 62.9357 80.3241 63.9095C80.4765 64.5521 80.5693 65.2212 80.6024 65.8969C80.7151 68.633 80.112 71.4154 79.509 73.7804C78.5215 77.6228 79.9132 80.3124 83.6376 81.7632C84.3732 82.0481 87.8458 82.7503 90.828 82.8232C91.007 82.8232 91.1925 82.8298 91.3714 82.8298C94.4862 82.8298 97.3557 82.1475 99.9933 81.4121C100.212 81.3525 100.437 81.273 100.656 81.1803C100.875 81.0875 101.087 81.0014 101.279 80.9285C102.651 80.3787 104.354 79.6897 105.719 77.7354C106.912 76.0328 107.316 74.0918 106.859 72.27C106.422 70.5343 105.229 69.0901 103.492 68.209C102.631 67.7717 101.756 67.4074 100.822 67.1093C99.8475 66.7913 98.8799 66.5859 97.9455 66.4402C98.6281 64.9363 99.2113 63.512 99.7083 62.1142C100.656 59.4444 101.637 56.3043 101.286 52.7468C100.981 49.6994 99.6023 47.3675 97.4087 45.9895C97.9322 45.9166 98.469 45.8636 99.0058 45.8106C100.895 45.6252 102.85 45.4927 104.738 45.3668C106.143 45.274 107.601 45.1747 109.046 45.0488C112.618 44.7507 115.68 43.863 118.417 42.3326C122.154 40.2458 124.381 37.5363 125.236 34.0649C126.111 30.5141 125.779 26.8837 124.229 22.9751V22.9817Z"
                fill="url(#paint0_linear_161_1237)"
              />
              <path
                d="M67.7459 21.4113C72.9813 21.4311 77.872 22.8621 82.564 25.088C87.2759 27.3205 92.1865 28.9237 97.3954 29.4272C104.612 30.1228 111.365 28.7979 117.409 24.6044C117.992 24.2003 118.569 23.7896 119.318 23.7432C119.881 23.7101 120.292 23.869 120.524 24.452C121.644 27.2676 122.095 30.156 121.366 33.1238C120.703 35.8201 118.801 37.5624 116.468 38.8675C114.063 40.2123 111.438 40.8682 108.708 41.0934C105.348 41.3783 101.968 41.5307 98.6148 41.8619C95.8182 42.1335 93.0216 42.531 90.5894 44.1408C88.979 45.2074 87.8922 46.6649 87.256 48.4734C87.0108 49.1757 87.203 49.3744 87.9386 49.1889C89.4164 48.8245 90.8943 48.5066 92.4251 48.5728C95.4139 48.7053 97.0243 50.1959 97.3225 53.1505C97.5876 55.8203 96.8321 58.3245 95.9573 60.7889C94.9765 63.5514 93.7174 66.2013 92.3522 68.7916C91.8751 69.6992 91.8817 69.7191 92.8691 69.8582C95.1157 70.1629 97.4021 70.1894 99.589 70.8983C100.311 71.1301 101.007 71.415 101.683 71.7661C103.406 72.6406 103.313 74.2305 102.452 75.4694C101.637 76.6353 100.663 76.8738 99.1118 77.523C99.0522 77.5495 98.9793 77.576 98.913 77.5893C96.302 78.318 93.6445 78.9275 90.9208 78.8546C88.1838 78.7817 85.2082 78.1126 85.0691 78.0596C83.24 77.3442 82.8689 76.6486 83.3526 74.7671C84.1147 71.7992 84.6979 68.8115 84.572 65.7309C84.5323 64.7969 84.4063 63.8826 84.1876 62.9817C83.4852 60.0601 81.2784 58.4835 78.2432 58.6557C77.3352 58.7087 76.4605 58.9008 75.5923 59.1393C75.2808 59.2254 74.2404 59.6693 74.0482 59.4772C73.8229 59.2519 74.3133 58.3973 74.4127 58.1655C76.2484 53.7467 80.6753 43.1272 81.4507 41.3187C81.7423 40.6363 81.5633 40.2587 80.9072 39.9275C78.4155 38.6754 75.811 37.6817 73.2728 36.5356C69.6677 34.9125 66.0427 33.3226 62.4243 31.7194C61.3706 31.2557 61.079 31.3683 60.6681 32.4614C59.8132 34.7337 58.7264 36.8735 57.2618 38.8344C55.9099 40.6496 54.2067 42.0143 52.1258 42.8424C49.9588 43.7036 47.7188 43.6108 45.5054 42.9616C45.1475 42.8556 44.7963 42.7364 44.445 42.6105C42.8612 42.0275 41.9334 40.3846 42.2714 38.735C42.9672 35.3233 44.4119 32.2428 46.97 29.7585C51.4631 25.3994 56.8642 22.7561 63.0539 21.7557C64.598 21.504 66.162 21.4046 67.7326 21.4113H67.7459Z"
                fill="#3D1DF3"
              />
              <path
                d="M32.7946 66.771C31.3367 66.771 30.6011 66.0357 30.727 64.5915C30.8595 63.0479 31.3897 61.5904 31.9596 60.1661C33.3646 56.6285 35.3527 53.4685 38.2288 50.9047C39.3886 49.8712 39.4482 49.858 40.873 50.4807C49.316 54.2105 57.7655 57.927 66.2084 61.6501C66.8313 61.9283 67.4476 62.2264 68.0507 62.5444C68.4285 62.7432 68.667 63.0545 68.4218 63.505C66.447 67.195 63.8889 70.2291 59.6078 71.3156C57.56 71.839 55.6249 71.4481 53.8025 70.461C50.6414 68.7584 48.0038 66.4 45.5319 63.8429C44.5776 62.8558 43.6498 61.8554 42.7353 60.8352C42.3907 60.451 42.1123 60.4245 41.6749 60.6895C41.1249 61.0207 40.7869 61.5176 40.3893 61.9813C38.8849 63.7435 37.2745 65.3666 35.0677 66.241C34.3388 66.5325 33.6031 66.7909 32.7946 66.7511V66.771Z"
                fill="#3D1DF3"
              />
              <path
                d="M97.7864 24.6905C91.378 24.7899 87.2427 19.4371 87.2957 14.3559C87.3554 8.43333 91.9546 3.92849 97.8328 3.99474C103.539 4.06099 108.045 8.73807 108.019 14.495C107.992 20.8879 102.439 24.8164 97.7864 24.6905Z"
                fill="#3D1DF3"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_161_1237"
              x="0"
              y="0"
              width="258"
              height="125"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_161_1237"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_161_1237"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_161_1237"
              x1="-3.83321"
              y1="41.4317"
              x2="117.88"
              y2="41.4317"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.11" stopColor="#C7FFB1" />
              <stop offset="1" stopColor="#00EA77" />
            </linearGradient>
            <clipPath id="clip0_161_1237">
              <rect
                width="250"
                height="117"
                fill="white"
                transform="translate(4)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="p-8 ">
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full h-14 rounded-2xl border-[1px] border-[#FFFFFF] bg-transparent pl-16 text-white"
            placeholder="email"
            required
          />

          <svg
            className="absolute left-2  top-4 h-5 w-10"
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M10 3.5C10 5.15761 8.65761 6.5 7 6.5C5.34239 6.5 4 5.15761 4 3.5C4 1.84239 5.34239 0.5 7 0.5C8.65761 0.5 10 1.84239 10 3.5ZM0.5 12.25C0.5 11.8518 0.695521 11.4659 1.10433 11.0886C1.51653 10.7082 2.11137 10.3711 2.80984 10.0913C4.20758 9.53139 5.89438 9.25 7 9.25C8.10562 9.25 9.79242 9.53139 11.1902 10.0913C11.8886 10.3711 12.4835 10.7082 12.8957 11.0886C13.3045 11.4659 13.5 11.8518 13.5 12.25V13.5H0.5V12.25Z"
              stroke="white"
            />
          </svg>
        </div>
        <div className="relative mb-8">
          <svg
            className="absolute left-2  top-4 h-5 w-10"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.625 5.83333H3.125V5.33333V3.80952C3.125 2.95588 3.51387 2.12058 4.23475 1.49287C4.95783 0.863245 5.95165 0.5 7 0.5C7.51777 0.5 8.0292 0.588862 8.5046 0.760325C8.97999 0.931785 9.40786 1.18167 9.76525 1.49287C10.1225 1.80395 10.4016 2.16949 10.5905 2.56647C10.7792 2.96316 10.875 3.38531 10.875 3.80952V5.33333V5.83333H11.375H12.25C12.6022 5.83333 12.9283 5.95576 13.1591 6.15673C13.3877 6.35578 13.5 6.6097 13.5 6.85714V14.4762C13.5 14.7236 13.3877 14.9775 13.1591 15.1766C12.9283 15.3776 12.6022 15.5 12.25 15.5H1.75C1.39785 15.5 1.0717 15.3776 0.840906 15.1766C0.612304 14.9775 0.5 14.7236 0.5 14.4762V6.85714C0.5 6.6097 0.612304 6.35578 0.840907 6.15673C1.0717 5.95576 1.39785 5.83333 1.75 5.83333H2.625ZM3.875 5.33333V5.83333H4.375H9.625H10.125V5.33333V3.80952C10.125 3.04661 9.77637 2.33157 9.1845 1.8162C8.59482 1.30274 7.80817 1.02381 7 1.02381C6.19183 1.02381 5.40518 1.30274 4.8155 1.8162C4.22363 2.33157 3.875 3.04661 3.875 3.80952V5.33333ZM7 12.6905C7.57611 12.6905 8.1402 12.4918 8.56578 12.1212C8.99355 11.7488 9.25 11.2275 9.25 10.6667C9.25 10.1058 8.99355 9.58457 8.56578 9.21209C8.1402 8.84152 7.57611 8.64286 7 8.64286C6.42389 8.64286 5.8598 8.84152 5.43422 9.21209C5.00645 9.58457 4.75 10.1058 4.75 10.6667C4.75 11.2275 5.00645 11.7488 5.43422 12.1212C5.8598 12.4918 6.42389 12.6905 7 12.6905Z"
              stroke="white"
            />
          </svg>
          <input
            type="password"
            className="w-full h-14 rounded-2xl border-[1px] border-[#FFFFFF] bg-transparent pl-16 text-white"
            placeholder="contraseña"
            required
          />
          <ViewPassword />
        </div>
        <div className="pl-4 pr-4">
          <Link href="/backoffice/manage_orders">
            <button className="bg-[#00EA77] text-[#3D1DF3] rounded-2xl w-full h-9  mb-5">
              Ingresar
            </button>
          </Link>
        </div>
        <h4 className="flex text-white text-xs items-center justify-center ">
          OLVIDÉ MI CONTRASEÑA
        </h4>
      </div>
    </div>
  );
};

export default page;
