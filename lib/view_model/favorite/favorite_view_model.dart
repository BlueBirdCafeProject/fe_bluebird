import 'dart:convert';

import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../model/category/category_model.dart';
import '../../repository/favorite/favorite_repository.dart';
import '../../shared/enum/enum_shared_pref_key.dart';

part 'favorite_view_model.g.dart';

@riverpod
class FavoriteViewModel extends _$FavoriteViewModel {
  @override
  CategoryModel build() {
    String? value = ref.read(favoriteRepositoryProvider).readValue(
          EnumSharedPreferencesKey.favoriteProjects.value,
        );

    if (value?.isEmpty ?? true) {
      return const CategoryModel(projects: []);
    }
    return CategoryModel.fromJson(jsonDecode(value ?? ""));
  }

  addItem(CategoryItemModel value) {
    final oldState = state.projects;
    state = state.copyWith(projects: [...oldState, value]);
    ref.read(favoriteRepositoryProvider).saveValue(
          EnumSharedPreferencesKey.favoriteProjects.value,
          jsonEncode(
            state.toJson(),
          ),
        );
  }

  removeItem(CategoryItemModel value) {
    final oldState = [...state.projects];
    oldState.removeWhere((element) => element.id == value.id);

    state = state.copyWith(projects: [...oldState]);
    ref.read(favoriteRepositoryProvider).saveValue(
          EnumSharedPreferencesKey.favoriteProjects.value,
          jsonEncode(
            state.toJson(),
          ),
        );
  }
}
