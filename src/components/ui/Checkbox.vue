<template>
  <div class="checkbox" v-if="kind === 'checkbox'">
    <input
      class="checkbox__input"
      :kind="kind"
      :type="type"
      :name="name"
      :id="name"
      :value="value"
      :checked="checked"
      @input="updateChecked($event)"
    />
    <label class="checkbox__label" :for="id">
      <span>Регистрируясь, Вы соглашаетесь с политикой</span>
      <a href="#" class="checkbox__link">конфиденциальности</a>
      <span>и обработкой</span>
      <a href="#" class="checkbox__link">персональных данных</a>
    </label>
  </div>
  <div class="switcher" v-if="kind === 'switcher'">
    <div class="switcher__container">
      <label class="switcher__wrap">
        <input
          class="switcher__input"
          :kind="kind"
          :type="type"
          :name="name"
          :id="name"
          :value="value"
          :checked="checked"
          @input="updateChecked($event)"
        />
        <span class="switcher__slider"></span>
      </label>
      <label :for="id" class="switcher__label"
        >Хотите чтобы Ваш профиль видели другие участники платформы?</label
      >
    </div>
    <div class="switcher__info">
      Включает профиль для просмотра другими пользователями по ссылке
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:checked"]);
const updateChecked = (event) => {
  emit("update:checked", event.target.checked);
};

const props = defineProps({
  checked: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    required: true,
  },
  kind: {
    type: String,
    default: "checkbox",
  },
  id: {
    type: String,
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
});
</script>

<style lang="scss">
.checkbox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &__input[type="checkbox"] {
    flex-shrink: 0;
    position: relative;
    width: 19px;
    height: 17px;
    border: 2px solid var(--lightBlue);
    border-radius: 5px;
    appearance: none;
    outline: 0;
    cursor: pointer;
    transition: all 175ms cubic-bezier(0.1, 0.1, 0.25, 1);

    &::before {
      position: absolute;
      content: "";
      display: block;
      top: 1px;
      left: 5px;
      width: 7px;
      height: 9px;
      border-style: solid;
      border-color: var(--white);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }

    &:checked {
      background: var(--lightBlue);
      width: 19px;
      height: 17px;
      border: 2px solid var(--lightBlue);

      &::before {
        opacity: 1;
      }
    }
  }

  &__label {
    color: var(--black);
    font-size: 14px;
    line-height: 1.35;
    margin-left: 14px;
    cursor: pointer;

    span {
      letter-spacing: -1px;
    }
  }

  &__link {
    position: relative;
    text-decoration: none;
    color: var(--lightBlue);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    letter-spacing: -1px;
    padding: 0 2px;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 1.5px;
      background-color: var(--lightBlue);
      transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);

      &:hover {
        left: 0;
        right: auto;
        width: 100%;
      }
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .checkbox__link:hover::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
}
.switcher {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__container {
    display: flex;
    align-items: center;
  }

  &__wrap {
    position: relative;
    display: flex;
    align-items: center;
	flex-shrink: 0;
    width: 39px;
    height: 19px;
  }

  &__input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gray);
    transition: var(--transition);
    border-radius: 100px;
  }

  &__slider:before {
    position: absolute;
    content: "";
    height: 19px;
    width: 19px;
    left: 0px;
    bottom: 0px;
    background-color: var(--white);
    transition: var(--transition);
    border-radius: 50%;
  }

  &__input:checked + .switcher__slider {
    background-color: var(--lightBlue);
  }

  &__input:checked + .switcher__slider:before {
    transform: translateX(20px);
  }

  &__label {
    font-weight: 500;
    color: var(--black);
    margin-left: 5px;
    line-height: 1.2;
    cursor: pointer;
  }

  &__info {
    font-size: 14px;
    line-height: 1.35;
    margin: 8px 0 0 44px;
    letter-spacing: -1px;
  }
}
@media (max-width: 576px) {
  .checkbox {
    &__label {
      font-size: 12px;
    }
  }
  .switcher {
    &__label {
      font-size: 12px;
    }
    &__info {
      font-size: 12px;
    }
  }
}
@media (max-width: 475px) {
  .checkbox {
    &__label {
      font-size: 10px;
    }
	&__input[type="checkbox"] {
		width: 15px;
		height: 15px;
		&:before {
			top: 0;
			left: 3px;
		}
	}
	&__input[type="checkbox"]:checked {
		width: 15px;
		height: 15px;
	}
  }
  .switcher {
	&__wrap {
		width: 26px;
		height: 15px;
	}
	&__slider::before{
		height: 15px;
		width: 15px;
	}
	&__input:checked + .switcher__slider:before {
    transform: translateX(15px);
  }
    &__label {
      font-size: 10px;
    }
    &__info {
      font-size: 10px;
    }
  }
}
</style>
