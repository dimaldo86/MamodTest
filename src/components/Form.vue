<template>
  <form
    class="form"
    :class="{ hide: isHideForm }"
    @submit.prevent="submitForm()"
    novalidate
  >
    <div class="form__header">
      <h1 class="form__header-title">Регистрация</h1>
      <div class="form__divider"></div>
    </div>
    <div class="form__body">
      <h2 class="form__body-title">Заполните Ваши данные</h2>
      <div class="form__body-field">
        <Input
          name="username"
          placeholder="Имя"
          type="type"
          v-model:value="v.formData.username.$model"
          :error="v.formData.username.$errors"
        />
        <Input
          name="email"
          placeholder="Email"
          type="email"
          v-model:value="v.formData.emailField.$model"
          :error="v.formData.emailField.$errors"
        />
        <Select
          :roles="roles"
          @select="itemSelect"
          :selectedBtn="selectedBtn"
          v-model="formData.selectRole"
        />
        <Input
          name="password"
          placeholder="Пароль"
          type="password"
          v-model:value="v.formData.password.$model"
          :error="v.formData.password.$errors"
        />

        <Input
          name="password_repeat"
          placeholder="Повторите пароль"
          type="password"
          v-model:value="v.formData.password_repeat.$model"
          :error="v.formData.password_repeat.$errors"
        />
      </div>
    </div>
    <div class="form__divider"></div>
    <div class="form__footer">
      <div class="form__footer-top">
        <Checkbox
          kind="switcher"
          type="checkbox"
          name="switcher"
          value="public"
          id="switcher"
          v-model:checked="formData.isPublicActive"
        />
      </div>
      <div class="form__footer-bottom">
        <Checkbox
          kind="checkbox"
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value="contract"
          v-model:checked="formData.isCheckboxActive"
        />
        <Button :disabled="v.$invalid || !formData.isCheckboxActive"
          >Зарегистрироваться</Button
        >
      </div>
    </div>
  </form>
  <div class="feedback">{{ feedback }}</div>
</template>

<script setup>
import Button from "./ui/Button.vue";
import Input from "./ui/Input.vue";
import Select from "./ui/Select.vue";
import Checkbox from "./ui/Checkbox.vue";
import { asyncPostCall } from "../js/api";
import { ref, computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  helpers,
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";

const roles = [
	{ value: 1, name: "Администратор" },
	{ value: 2, name: "Директор" },
	{ value: 3, name: "Бухгалтер" },
	{ value: 4, name: "Программист" },
];
const selectedBtn = ref("Должность");

const itemSelect = (role) => {
	selectedBtn.value = formData.selectRole = role.name;
};

const formData = reactive({
	username: "",
	emailField: "",
	password: "",
	password_repeat: "",
	selectRole: "",
	requiredMinLength: 3,
	requiredMaxLength: 20,
	isCheckboxActive: true,
	isPublicActive: true,
});

const rules = computed(() => ({
  formData: {
    username: {
      required: helpers.withMessage("Поле Имя обязательно", required),
      minLength: helpers.withMessage(
        `Введите минимум ${formData.requiredMinLength} символа`,
        minLength(formData.requiredMinLength)
      ),
      maxLength: helpers.withMessage(
        `Введено много символов, максимальное значение ${formData.requiredMaxLength}`,
        maxLength(formData.requiredMaxLength)
      ),
    },
    emailField: {
      required: helpers.withMessage("Поле Email обязательно", required),
      email: helpers.withMessage(
        "Некoрректный email, пример корректного - test@mail.com",
        email
      ),
    },
    password: {
      required: helpers.withMessage("Поле Пароль обязательно", required),
      minLength: helpers.withMessage(
        "Введите минимум 6 символов",
        minLength(6)
      ),
      containsPasswordRequirement: helpers.withMessage(
        () =>
          `Пароль должен содержать заглавные латинские(A-Z) и строчные латинские буквы(a-z), цифру(0-9) и специальный символ(!@#$%&*])`,
        (value) =>
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
      ),
    },
    password_repeat: {
      sameAsPassword: helpers.withMessage(
        `Пароли не совпадают`,
        sameAs(formData.password)
      ),
    },
  },
}));

const v = useVuelidate(rules, {
  formData,
});
const feedback = ref("");
const isHideForm = ref(false);

const postResults = {
	username: formData.username,
	email: formData.emailField,
	password: formData.password,
	password_repeat: formData.password_repeat,
	role: formData.selectRole,
	public: formData.isPublicActive,
};

const submitForm = () => {
	v.value.$validate();
	if (v.value.$error) return;
	isHideForm.value = true;
	asyncPostCall(postResults);
	setTimeout(() => {
	feedback.value = "Регистрация успешно завершена";
	}, 500);
};
</script>

<style lang="scss" scoped>
.feedback {
	position: absolute;
	width: 70vw;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 36px;
	line-height: 1.3;
	color: var(--green);
}
.form {
	max-width: 960px;
	min-width: 300px;
	height: auto;
	background-color: var(--white);
	border-radius: 15px;
	transition: var(--transition);

	&.hide {
		opacity: 0;
		visibility: hidden;
		min-width: 0;
		max-width: 0;
		height: 0;
		overflow: hidden;
	}

	&__header {
		&-title {
			font-size: 19px;
			line-height: 1.4;
			letter-spacing: -0.5px;
			color: var(--black);
			font-weight: 700;
			padding: 17px 15px 17px 31px;
		}
	}
	&__divider {
		width: 100%;
		height: 1px;
		background-color: var(--lightGray);
	}

	&__body {
	padding: 17px 15px 30px 31px;

		&-title {
			font-size: 16px;
			font-weight: 500;
			margin-bottom: 34px;
			line-height: 1.2;
		}

		&-field {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			grid-template-rows: repeat(3, minmax(0, 1fr));
			grid-template-rows: auto;
			gap: 31px 14px;
		}
	}
  &__footer {
    padding: 23px 15px 66px 32px;

	&-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: 70px;
		margin-top: 30px;
	}
  }
}

@media (max-width: 992px) {
  .form {
    &__body {
      &-field {
        display: flex;
        flex-direction: column;
        width: 100%;
        column-gap: 0;
      }
    }
    &__footer {
      &-bottom {
        column-gap: 40px;
      }
    }
  }
}
@media (max-width: 768px) {
  .form {
    &__header {
      &-title {
        padding-left: 15px;
      }
    }
    &__body {
      padding-left: 15px;
      &-title {
        margin-bottom: 20px;
      }
      &-field {
        gap: 20px 0;
      }
    }
    &__footer {
      padding-bottom: 36px;
      padding-left: 15px;

      &-bottom {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 30px;
      }
    }
  }
}
@media (max-width: 576px) {
  .form {
    &__header {
      &-title {
        font-size: 16px;
      }
    }
    &__body {
      &-title {
        font-size: 14px;
      }
    }
    &__footer {
      &-bottom {
        margin-top: 20px;
      }
    }
  }
}
@media (max-width: 475px) {
  .form {
    &__header {
      &-title {
        font-size: 14px;
        padding: 15px 10px;
      }
    }
    &__body {
      padding: 15px 10px;
      &-title {
        font-size: 12px;
        margin-bottom: 15px;
      }
      &-field {
        row-gap: 15px;
      }
    }
    &__footer {
      padding: 15px 10px;
      &-bottom {
        row-gap: 15px;
        margin-top: 15px;
      }
    }
  }
}
</style>

