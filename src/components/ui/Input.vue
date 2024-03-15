<template>
  <div class="wrap">
    <div class="wrap__password" v-if="type === 'password'">
      <input
        class="wrap__input"
        :type="showPassword ? 'text' : 'password'"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue"
      />

      <button
        class="wrap__password-action"
        @click.prevent="showPassword = !showPassword"
      >
        <svg
          v-show="showPassword"
          width="21.000000"
          height="9.308035"
          viewBox="0 0 21 9.30803"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            id="Vector"
            d="M0.16272 4.29374C0.661743 3.78874 1.18469 3.32952 1.72644 2.91609C4.17725 1.04918 7.08594 0.0520592 10.0853 0.00199127C13.0778 -0.0480804 16.1472 0.846035 18.921 2.76159C19.5841 3.21937 20.225 3.73009 20.8419 4.29803C21.0402 4.48114 21.0504 4.75152 20.8812 4.94322C20.1754 5.77725 19.3636 6.49111 18.4767 7.08337C16.2566 8.56689 13.5598 9.29649 10.827 9.30793C8.10461 9.31795 5.3479 8.61267 2.99976 7.22357C1.95032 6.6027 0.981323 5.84592 0.131958 4.9561C-0.0577393 4.75582 -0.0389404 4.47399 0.16272 4.29374ZM10.5006 1.54845C11.5243 1.54845 12.4523 1.89608 13.124 2.4583C13.7957 3.02052 14.2109 3.79589 14.2109 4.65425C14.2109 5.51116 13.7957 6.28797 13.124 6.85019C12.4523 7.41241 11.526 7.76004 10.5006 7.76004C9.47693 7.76004 8.54895 7.41241 7.8772 6.85019C7.20557 6.28797 6.79028 5.51259 6.79028 4.65425C6.79028 3.79733 7.20557 3.02052 7.8772 2.4583C8.54895 1.89608 9.47693 1.54845 10.5006 1.54845ZM12.2865 3.15929C11.8302 2.77732 11.1979 2.53984 10.5006 2.53984C9.80334 2.53984 9.17102 2.77589 8.71472 3.15929C8.25842 3.54125 7.97473 4.07057 7.97473 4.65425C7.97473 5.23792 8.25671 5.76724 8.71472 6.1492C9.17102 6.53117 9.80334 6.76865 10.5006 6.76865C11.1979 6.76865 11.8302 6.5326 12.2865 6.1492C12.7428 5.76724 13.0265 5.23792 13.0265 4.65425C13.0265 4.07057 12.7428 3.54125 12.2865 3.15929ZM2.54504 3.66714C2.14856 3.969 1.76575 4.29517 1.40002 4.6428C2.09558 5.31804 2.86987 5.90171 3.69873 6.3924C5.8418 7.65847 8.349 8.30223 10.8236 8.29365C13.2881 8.28363 15.72 7.62556 17.7229 6.28797C18.4066 5.83162 19.0389 5.29515 19.608 4.67857C19.1312 4.26227 18.6459 3.88602 18.1536 3.54554C15.6089 1.79022 12.818 0.971924 10.1093 1.01627C7.40723 1.06205 4.77368 1.96904 2.54504 3.66714Z"
            fill="#A4A4A6"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </svg>
        <svg
          v-show="!showPassword"
          width="21.000000"
          height="11.781538"
          viewBox="0 0 21 11.7815"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            id="Vector"
            d="M0.163208 5.51773C0.662598 4.9962 1.18542 4.52154 1.72717 4.09491C4.177 2.16623 7.08582 1.13589 10.0848 1.08415C11.2061 1.06479 12.3381 1.18246 13.4613 1.4413L12.4523 2.31406C11.6694 2.17865 10.8855 2.11834 10.1085 2.13179C7.40649 2.1785 4.77393 3.11586 2.54419 4.87144C2.14697 5.18409 1.76453 5.52039 1.3988 5.87961C2.0946 6.57749 2.86853 7.18062 3.69775 7.68707C4.20837 7.99913 4.73975 8.27438 5.2865 8.51282L4.38721 9.29068C3.91174 9.06835 3.44824 8.82 2.99951 8.54579C1.94958 7.90452 0.980591 7.12238 0.131714 6.20275C-0.0577393 5.99624 -0.0389404 5.70458 0.163208 5.51773ZM16.4115 0L17.4186 0.871136L4.80554 11.7815L3.79822 10.9101L16.4115 0ZM16.7003 2.60306C17.4562 2.97661 18.1986 3.42024 18.921 3.93555C19.5836 4.40801 20.2258 4.93678 20.8419 5.52246C21.0406 5.71124 21.0504 5.99122 20.8805 6.18871C20.1746 7.05112 19.3636 7.78759 18.4762 8.40062C16.2559 9.93372 13.5588 10.6885 10.8269 10.6992C9.78198 10.7032 9.15234 10.2348 8.12231 10.0227L8.72815 9.49897C9.42285 9.60318 10.1239 9.65403 10.822 9.65137C13.2866 9.64191 15.7189 8.96133 17.7206 7.57886C18.4038 7.10715 19.0376 6.5531 19.6053 5.91523C19.129 5.4858 18.6437 5.09584 18.1512 4.74475C17.3899 4.20179 16.606 3.7456 15.8087 3.37397L16.7003 2.60306ZM10.5001 2.682C10.9553 2.682 11.3915 2.7531 11.7948 2.88289L10.8226 3.72387C10.7168 3.71219 10.6093 3.70628 10.5002 3.70628C9.80286 3.70628 9.17151 3.95078 8.71448 4.34607C8.25757 4.74135 7.97485 5.28757 7.97485 5.89084C7.97485 5.9853 7.98169 6.07829 7.99524 6.16949L7.02295 7.01077C6.8728 6.66205 6.79077 6.28465 6.79077 5.89084C6.79077 5.00463 7.20605 4.20268 7.87732 3.62187C8.54846 3.04107 9.47571 2.682 10.5001 2.682ZM14.0331 4.91017C14.1476 5.21912 14.2095 5.54877 14.2095 5.89084C14.2095 6.77691 13.7942 7.57901 13.123 8.15967C12.4515 8.74033 11.5243 9.09939 10.5001 9.09939C10.1049 9.09939 9.72388 9.04603 9.36646 8.94669L10.3772 8.07245C10.4178 8.07423 10.4589 8.07511 10.5001 8.07511C11.1975 8.07511 11.8289 7.8309 12.2858 7.43562C12.7428 7.04033 13.0255 6.49412 13.0255 5.89099C13.0255 5.85537 13.0244 5.82003 13.0225 5.78456L14.0331 4.91017Z"
            fill="#A4A4A6"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </svg>
      </button>
    </div>

    <input
      v-else
      class="wrap__input"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    />
    <TransitionGroup name="error">
      <div class="wrap__error" v-for="element in error" :key="element.$uid">
        <div class="wrap__error-message">{{ element.$message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    error: {
        type: Array,
        required: false,
    },
    value: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "text",
    },
    placeholder: {
        type: String,
        required: false,
    },
});

const showPassword = ref(false);

const emit = defineEmits(["update:value"]);
const updateValue = (e) => {
    emit("update:value", e.target.value);
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 450px;

  &__password {
    position: relative;

    &-action {
        position: absolute;
        top: 50%;
        right: 0;
        padding: 10px;
        outline: none;
        border: none;
        background: none;
        transform: translateY(-50%);
		    line-height: 0;
        cursor: pointer;
    }
  }

  &__input {
    border: 1px solid var(--darkWhite);
    padding: 10px;
    height: 39px;
    border-radius: 7px;
    font-size: 14px;
    width: 100%;
    z-index: 1;

    &::placeholder {
        font-size: 14px;
        color: var(--gray);
		font-family: "Montserrat", sans-serif;
    }

    &:focus-visible {
        outline: none;
        border: 2px solid var(--black);
    }
    &.error-input:focus-visible {
        border: 2px solid var(--danger);
        outline: none;
    }
  }

  &__error {
        width: 100%;
        color: var(--danger);
        margin-top: 8px;
        font-size: 14px;
        font-weight: 500;

        &-message {
           transition: var(--transition);
        }
    }


  }
.error {
  &-enter-active {
    transition: all 0.3s ease-out;
  }

  &-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from {
    transform: translateX(-30px);
    opacity: 0;
  }
  &-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
}
@media(max-width:992px) {
	.wrap {
		width: 100%;
	}
}
@media(max-width:576px) {
	.wrap {
		&__input {
			&::placeholder{
				font-size: 12px;
			}
		}
		&__error{
			font-size: 12px;
		}
	}
}
@media(max-width:475px) {
	.wrap {
		&__input {
			&::placeholder{
				font-size: 10px;
			}
		}
		&__error{
			font-size: 10px;
		}
	}
}
</style>
