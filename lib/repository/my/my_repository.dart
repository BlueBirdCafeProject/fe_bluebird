
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../model/project/project_model.dart';
import '../../service/project/project_api.dart';
import '../../service/project/project_api_service.dart';
import '../../shared/model/response_model.dart';

part 'my_repository.g.dart';

@riverpod
MyRepositoryImpl myRepository(MyRepositoryRef ref) {
  final projectService = ref.watch(projectApiServiceProvider);

  return MyRepositoryImpl(projectService);
}

abstract class MyRepository {
  Future getProjectsByUserId(String userId);

  Future updateProjectOpenState(String id, ProjectItemModel body);

  Future deleteProject(String id);
}

class MyRepositoryImpl implements MyRepository {
  ProjectApiClient projectService;

  MyRepositoryImpl(this.projectService);

  @override
  Future<ResponseModel> deleteProject(String id) async {
    final result = await projectService.deleteProject(id);
    return result;
  }

  @override
  Future<ProjectModel> getProjectsByUserId(String userId) async {
    final result = await projectService.getProjectByUserId(userId);
    return result;
  }

  @override
  Future<ResponseModel> updateProjectOpenState(
      String id, ProjectItemModel body) async {
    final result = await projectService.updateProjectOpenState(id, body);
    return result;
  }
}
