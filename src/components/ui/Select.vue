<template>
  <div
    class="select"
    :style="{ 'grid-column-start': positionGrid }"
    ref="select"
  >
    <button class="select__btn" @click.prevent="isListVisible = !isListVisible">
      <span >{{ selectedBtn }}</span>
      <svg
        width="8.506104"
        height="4.503021"
        viewBox="0 0 8.5061 4.50302"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          id="Carret"
          d="M1.24109 0.183578L4.74109 3.18358L4.25305 3.75302L3.76501 3.18358L7.26501 0.183578L8.24109 1.32246L4.74109 4.32246Q4.69052 4.36581 4.63311 4.39957Q4.5757 4.43333 4.51323 4.45644Q4.45077 4.47954 4.38521 4.49128Q4.31965 4.50302 4.25305 4.50302Q4.18645 4.50302 4.12089 4.49128Q4.05534 4.47954 3.99287 4.45644Q3.93041 4.43333 3.873 4.39957Q3.81558 4.36581 3.76501 4.32246L0.265015 1.32246L1.24109 0.183578ZM7.26282 0.211777L7.26501 0.183578C7.58386 -0.0897522 8.04919 -0.0539627 8.32251 0.264931C8.59583 0.583817 8.56006 1.04913 8.24109 1.32246L8.21289 1.3203L7.26282 0.211777ZM0.293213 1.3203L0.265015 1.32246C-0.0539551 1.04913 -0.0897217 0.583817 0.183594 0.264931C0.456909 -0.0539627 0.922241 -0.0897522 1.24109 0.183578L1.24329 0.211777L0.293213 1.3203Z"
          fill="#A7A7B6"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
      </svg>
    </button>
    <Transition name="slide-fade" appear>
      <ul class="select__list" v-show="isListVisible">
        <li
          class="select__item"
          v-for="role in roles"
          :key="role.value"
          @click="selectList(role)"
        >
          {{ role.name }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  roles: {
    type: Array,
    default() {
      return [];
    },
  },
  selectedBtn: {
    type: String,
    required: true,
  },

  positionGrid: {
    type: String,
    default: "2",
  },
});
const emit = defineEmits(["select"]);
const isListVisible = ref(false);
const select = ref(null);

const selectList = (role) => {
	emit("select", role);
	isListVisible.value = false;
};

const closeSelect = (el) => {
	if (!select.value.contains(el.target)) {
		isListVisible.value = false;
	}
};

onMounted(() => {
  window.addEventListener("click", closeSelect);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", closeSelect);
});
</script>

<style lang="scss" scoped>
.slide-fade {
  &-enter-active {
    transition: all 0.3s ease-out;
  }

  &-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
}
.select {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 39px;
    border: 1px solid var(--darkWhite);
    font-family: "Montserrat", sans-serif;
    box-shadow: 0px 4px 8px rgba(var(--darkGray), 0.04);
    border-radius: 7px;
    padding: 16px;
    font-size: 14px;
    line-height: 1.35;
    background: var(--white);
    color: var(--gray);
    transition: all 0.1s ease-in;
    cursor: pointer;

    &:focus,
    &:focus-visible,
    &:active {
       border: 2px solid var(--black);
	   color: var(--black);
    }
  }

  &__list {
    position: absolute;
    top: 104%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    list-style-type: none;
    background: var(--white);
    border: 1px solid var(--darkWhite);
    box-shadow: 0px 4px 8px var(--lightGray);
    border-radius: 6px;
    z-index: 5;
  }

  &__item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px;
	font-size: 14px;
    color: var(--black);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background: var(--lightGray);
    }
  }
}
@media(max-width:576px) {
	.select {
		&__btn {
			font-size: 12px;
		}

		&__item {
			font-size: 12px;
			padding: 10px;
		}
	}
}
@media(max-width:475px) {
	.select {
		&__btn {
			font-size: 10px;
		}
		&__item {
			font-size: 10px;
		}
	}
}
</style>
